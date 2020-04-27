import React from 'react'
import { PostData } from '../../../lib/types'
import Div from '../../atoms/Div/Div'

import './PostView.css'
import './PostView.sass'
import './prism.css'
import { Link } from 'react-router-dom'
import TagsListing from '../TagsListing/TagsListing'
import FacebookShareButton from '../../atoms/ShareButtons/FacebookShareButton'
import TwitterShareButton from '../../atoms/ShareButtons/TwitterShareButton'
import EmailShareButton from '../../atoms/ShareButtons/EmailShareButton'
import ShareButtonGroup from '../../molecules/ShareButtonGroup/ShareButtonGroup'

export type PostViewProps = {
  post: PostData
}

export default class PostView extends React.Component<PostViewProps>{
  componentDidMount(){
    const postContent = document.getElementsByClassName("post-content")
    postContent[0].innerHTML += this.props.post.html
    // Prism.highlightAll()
  }

  render(){
    return (
      <Div className="post">
        { this.renderGoBackButton() }
        { this.renderHeadImage() }
        <Div className="post__title">
          <h1>{ this.props.post.title }</h1>
          <Div className="post__date">
            <span>{ `Última atualização: ${ this.props.post.updatedAt.toDateString() }` }</span>
          </Div>
        </Div>
        <Div className="post-content">
        </Div>
        <Div mb="16px" className="post__bottom" display="flex" flexWrap="wrap">
          <Div>
            <Div className="post__tags_title">Tags</Div>
            <TagsListing tags={ this.props.post.tags.map(tag => ({ title: tag })) } onSelectTag={ (tag) => {} } />
          </Div>
          <Div ml="auto">
            <Div mb="4px" fontWeight="bold">Compartilhar</Div>
            <ShareButtonGroup url="https://localhost.com"/>
          </Div>
        </Div>
        { this.renderGoBackButton() }
      </Div>
    )
  }

  private renderGoBackButton(){
    return (
      <Div mb="32px" className="post__goback">
        <Link to="/index">
          <Div className="post__goback_button">
            <i className="fa fa-caret-left"></i>
          </Div>
          <span>Voltar ao menu</span>
        </Link>
      </Div>
    )
  }

  private renderHeadImage(){
    if(!!this.props.post.image){
      return <Div height="244px" backgroundImage={ `url(${this.props.post.image})` }></Div>
    }
  }
}