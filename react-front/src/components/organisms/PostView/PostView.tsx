import React from 'react'
import { PostData } from '../../../lib/types'
import Div from '../../atoms/Div/Div'

import './PostView.css'
import './prism.css'

export type PostViewProps = {
  post: PostData
}

export default class PostView extends React.Component<PostViewProps>{
  componentDidMount(){
    const postContent = document.getElementsByClassName("post-content")
    postContent[0].innerHTML = this.props.post.html
  }

  render(){
    return (
      <Div className="post-content">
      </Div>
    )
  }
}