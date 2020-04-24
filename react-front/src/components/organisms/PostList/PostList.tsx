import React from 'react'
import Div from '../../atoms/Div/Div'
import PostPreview from '../PostPreview/PostPreview'

import './PostList.sass'

export type PostListProps = {
  width?: string
  horizontal?: boolean
  itemsPerLine?: 1 | 2 | 3 | 4
}

export default class PostList extends React.Component<PostListProps>{
  postList = [
    {
      image: "minotaur.png",
      title: "Bem vindo ao Blog",
      postedBy: "Paulo Márcio",
      tags: ["gamedev", "opengl"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: "minotaur.png",
      title: "Bem vindo ao Blog",
      postedBy: "Paulo Márcio",
      tags: ["gamedev", "opengl"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: "minotaur.png",
      title: "Bem vindo ao Blog",
      postedBy: "Paulo Márcio",
      tags: ["gamedev", "opengl"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: "minotaur.png",
      title: "Bem vindo ao Blog",
      postedBy: "Paulo Márcio",
      tags: ["gamedev", "opengl"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: "minotaur.png",
      title: "Bem vindo ao Blog",
      postedBy: "Paulo Márcio",
      tags: ["gamedev", "opengl"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: "minotaur.png",
      title: "Bem vindo ao Blog",
      postedBy: "Paulo Márcio",
      tags: ["gamedev", "opengl"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: "minotaur.png",
      title: "Bem vindo ao Blog",
      postedBy: "Paulo Márcio",
      tags: ["gamedev", "opengl"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]

  render(){
    return (
      <Div
      width={ this.props.width || "100%"}
      display="flex"
      flexWrap="wrap"
      flexDirection={ this.getFlexDirection() }
      >
        { this.renderPostList() }
      </Div>
    )
  }

  private renderPostList(){
    return this.postList.map((postPreview, index) => {
      return (
        <Div key={ index } className="post-preview-div" width={ this.getPostPreviewWidth() }>
          <PostPreview preview={ postPreview } />
        </Div>
      )
    })
  }

  private getPostPreviewWidth(){
    if(!!this.props.horizontal){
      const itemsPerLine = this.props.itemsPerLine || 3
      return `${ 100 / itemsPerLine }%`
    }

    return undefined
  }

  private getFlexDirection(){
    return (this.props.horizontal ? "row" : "column")
  }
}