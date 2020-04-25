import React from 'react'
import { PostData } from '../../../lib/types'
import { app } from '../../../app'

type PostFeederState = {
  post?: React.ReactNode
}

export type PostFeederProps = {
  slug: string
  postFactory: (post : PostData) => React.ReactNode
}

export default class PostFeeder extends React.Component<PostFeederProps, PostFeederState>{
  readonly appUnsub : any

  public constructor(props : PostFeederProps){
    super(props)

    this.state = {}

    this.appUnsub = app.subscribe(() => this.handleAppState())
  }

  componentDidMount(){
    app.loadPost(this.props.slug)
  }

  private handleAppState(){
    const post = app.getPost()
    this.setState({
      post: this.props.postFactory(post)
    })
  }

  componentWillUnmount(){
    this.appUnsub()
  }

  render(){
    if(!this.state.post){
      return <></>  
    }

    return (
      <>
      { this.state.post }
      </>
    )
  }
}