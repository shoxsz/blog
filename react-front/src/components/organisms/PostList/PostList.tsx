import React from 'react'
import Div from '../../atoms/Div/Div'
import PostPreview from '../PostPreview/PostPreview'

import './PostList.sass'
import { PostData } from '../../../lib/types'

export type PostListProps = {
  posts: PostData[]
  width?: string
  horizontal?: boolean
  itemsPerLine?: 1 | 2 | 3 | 4
  className?: string
}

export default class PostList extends React.Component<PostListProps>{
  render(){
    return (
      <Div
      className={ this.props.className }
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
      const itemsPerLine = this.props.itemsPerLine || 3
      return `${ 100 / itemsPerLine }%`
    }

    return undefined
  }

  private getFlexDirection(){
    return (this.props.horizontal ? "row" : "column")
  }
}