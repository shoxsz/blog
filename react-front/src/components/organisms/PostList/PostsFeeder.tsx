import React from "react";
import { PostData } from "../../../lib/types";
import Div from "../../atoms/Div/Div";
import PostList from "./PostList";
import { app } from "../../../app";

type PostsFeederState = {
  loading: boolean,
  posts: PostData[]
}

export type PostsFeederProps = {
  postListFactory: (posts : PostData[]) => React.ReactNode
}

export default class PostsFeeder extends React.Component<PostsFeederProps, PostsFeederState>{
  readonly appSub : any
  public constructor(props){
    super(props)

    this.state = {
      loading: true,
      posts: []
    }

    this.appSub = app.subscribe(() => this.handleAppState())
  }

  private handleAppState(){
    const paginatedPosts = app.getPosts() || []
    this.setState({ loading: false, posts: paginatedPosts.dataArray })
  }

  componentWillUnmount(){
    this.appSub()
  }

  render(){
    if(this.state.loading){
      return <Div>...</Div>
    }

    return this.props.postListFactory(this.state.posts)
  }
}