import React from "react";
import { PostData } from "../../../lib/types";
import Div from "../../atoms/Div/Div";
import PostList from "./PostList";
import { app } from "../../../app";

type PostsLoaderState = {
  loading: boolean,
  posts: PostData[]
}

export type PostsLoaderProps = {
  postListFactory: (posts : PostData[]) => React.ReactNode
}

export default class PostsLoader extends React.Component<PostsLoaderProps, PostsLoaderState>{
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
    if(this.state.loading){
      const posts = app.getPosts()
      if(posts.length > 0){
        this.setState({ loading: false, posts })
      }
    }
  }

  componentDidMount(){
    app.loadPosts()
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