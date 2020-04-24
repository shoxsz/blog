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
  public constructor(props : PostsPaginationProps){
    super(props)

    this.state = {
      pageCount: 20,
      postsPerPage: this.props.postsPerPage || 2
    }
  }

  componentDidMount(){
    app.loadPosts(1, this.state.postsPerPage)
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