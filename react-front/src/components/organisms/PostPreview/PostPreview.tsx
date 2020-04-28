import React from 'react'

import { PostData } from "../../../lib/types";
import Div from '../../atoms/Div/Div';

import './PostPreview.sass'
import Card from '../../molecules/Card/Card';
import { app } from '../../../app';
import { Redirect } from 'react-router'

type PostPreviewState = {
  openPost: boolean
}

export type PostPreviewProps = {
  preview: PostData
}

export default class PostPreview extends React.Component<PostPreviewProps, PostPreviewState>{
  public constructor(props){
    super(props)

    this.state = {
      openPost: false
    }
  }

  render(){
    if(this.state.openPost){
      return <Redirect to={ `/posts/${this.props.preview.slug}` } />
    }

    return (
      <Div className="post-preview" mt="16px" mb="16px">
        { this.renderPreviewImage() }
        { this.renderPreviewData() }
      </Div>
    )
  }

  private renderPreviewImage(){
    return (
      <Div onClick={ () => this.openPost() }>
        <Card className="post-preview__image" borderRadius="0px" margin="4px" padding="0px">
          <Div className="post-preview__image__place" backgroundImage={ `url(${this.props.preview.image})` }>
          </Div>
        </Card>
      </Div>
    )
  }

  private renderPreviewData(){
    return (
      <Div className="post-preview__data" ml="8px">
        <Div onClick={ () => this.openPost() } className="post-preview__data__title">{ this.props.preview.title }</Div>
        <Div className="post-preview__data__tags">{ this.renderTags() }</Div>
        <Div className="post-preview__data__text">
          <p>
            { this.props.preview.excerpt }
          </p>
          {/* <a href="#">Ler mais</a> */}
        </Div>
        <Div className="post-preview__data__postedBy">
          <span>Por </span>
          <span className="post-preview__data__author" onClick={ () => this.handleAuthorClicked() }>{ this.props.preview.authors[0] }</span> 
          <span> em </span>
          <span className="post-preview__data__update">{ this.props.preview.updatedAt.toDateString() }</span>
        </Div>
      </Div>
    )
  }

  private renderTags(){
    const tagsArray = this.props.preview.tags
    return tagsArray.map((tag, index) => {
      return (
        <span key={ index } onClick={ () => this.handleTagClicked(tag) }>{ `${tag} ` }</span>
      )
    })
  }

  private openPost(){
    this.setState({
      openPost: true
    })
  }

  private handleTagClicked(tag: string){
    app.setPostsFilter(tag)
    app.loadPosts(1, 20)
  }

  private handleAuthorClicked(){
    app.setPostsFilter(this.props.preview.authors[0])
    app.loadPosts(1, 20)
  }
}