import React from 'react'
import Pagination from '../../molecules/Pagination/Pagination'
import { app } from '../../../app'

type PostsPaginationState = {
  pageCount: number
  postsPerPage: number
}

export type PostsPaginationProps = {
  postsPerPage?: number
}

export default class PostsPagination extends React.Component<PostsPaginationProps, PostsPaginationState>{
  readonly appUnsub : any

  public constructor(props : PostsPaginationProps){
    super(props)

    this.state = {
      pageCount: 1,
      postsPerPage: this.props.postsPerPage || 20
    }

    this.appUnsub = app.subscribe(() => this.handleAppState())
  }

  private handleAppState(){
    this.setState({
      pageCount: app.getPosts().pageCount
    })
  }

  componentDidMount(){
    app.loadPosts(1, this.state.postsPerPage)
  }

  componentWillUnmount(){
    this.appUnsub()
  }

  render(){
    return (
      <Pagination onPageChange={ (page) => this.handlePageChange(page) } maxPages={ this.state.pageCount } startPage={ 1 } />
    )
  }

  private handlePageChange(page : number){
    app.loadPosts(page, this.state.postsPerPage)
  }
}