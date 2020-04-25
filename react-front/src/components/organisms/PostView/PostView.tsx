import React from 'react'
import { PostData } from '../../../lib/types'
import Div from '../../atoms/Div/Div'

export type PostViewProps = {
  post: PostData
}

export default class PostView extends React.Component<PostViewProps>{
  componentDidMount(){
    const head = document.getElementsByTagName("head")[0]

    head.innerHTML += '<link rel="stylesheet" type="text/css" href="http://localhost:2368/assets/built/screen.css?v=bdb7d49310" />'
    head.innerHTML += '<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>'
    head.innerHTML += '<script src="/assets/built/casper.js?v=bdb7d49310"></script>'

    const postContent = document.getElementsByClassName("post__content")
    postContent[0].innerHTML = this.props.post.html
  }

  render(){
    return (
      <Div color="black" className="post__content">
      </Div>
    )
  }
}