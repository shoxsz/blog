import React from 'react'
import Div from '../../atoms/Div/Div'
import PostPreview from '../PostPreview/PostPreview'

import './PostList.sass'
import { PostData } from '../../../lib/types'
import Pagination from '../../molecules/Pagination/Pagination'

export type PostListProps = {
  posts: PostData[]
  width?: string
  horizontal?: boolean
  itemsPerLine?: 1 | 2 | 3 | 4
  className?: string
}

export default class PostList extends React.Component<PostListProps>{
  render(){
    if(!this.props.posts.length){
      return this.renderEmpty()
    }

    return (
      <Div width={ this.props.width || "100%" }>
        <Div
        className={ this.props.className }
        width="100%"
        display="flex"
        flexWrap="wrap"
        flexDirection={ this.getFlexDirection() }
        >
          { this.renderPostList() }
        </Div>
      </Div>
    )
  }

  private renderEmpty(){
    return (
      <Div width={ this.props.width || "100%" } display="flex">
        <Div className="post-list__empty" margin="auto" textAlign="center">
          <i className="fa fa-search"></i>
          <br/>
          <span>Nenhum post encontrado :(</span>
        </Div>
      </Div>
    )
  }

  private renderPostList(){
    return this.props.posts.map((postPreview, index) => {
      return (
        <Div key={ index } className="post-preview-div" width={ this.getPostPreviewWidth() }>
          <PostPreview preview={ postPreview } />
        </Div>
      )
    })
  }

  private getPostPreviewWidth(){
    if(!!this.props.horizontal){
      const desiredItemsPerLine = this.props.itemsPerLine || 3
      const itemsPerLine = Math.min(desiredItemsPerLine, this.props.posts.length)
      return `${ 100 / itemsPerLine }%`
    }

    return undefined
  }

  private getFlexDirection(){
    return (this.props.horizontal ? "row" : "column")
  }
}