import React from 'react'

import { PostData } from "../../../lib/types";
import Div from '../../atoms/Div/Div';

import './PostPreview.sass'
import Card from '../../molecules/Card/Card';

export type PostPreviewProps = {
  preview: PostData
}

export default class PostPreview extends React.Component<PostPreviewProps>{
  render(){
    return (
      <Div className="post-preview" mt="16px" mb="16px">
        { this.renderPreviewImage() }
        { this.renderPreviewData() }
      </Div>
    )
  }

  private renderPreviewImage(){
    return (
      <Div>
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
        <Div className="post-preview__data__title">{ this.props.preview.title }</Div>
        <Div className="post-preview__data__tags">{ this.props.preview.tags.join(" ") }</Div>
        <Div className="post-preview__data__text">
          <p>
            { this.props.preview.excerpt }
          </p>
          {/* <a href="#">Ler mais</a> */}
        </Div>
        <Div className="post-preview__data__postedBy">
          Por <span>{ this.props.preview.authors[0] }</span>
        </Div>
      </Div>
    )
  }
}