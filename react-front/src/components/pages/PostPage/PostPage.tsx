import React from 'react'
import Card from '../../molecules/Card/Card'
import ContentTemplate from '../../templates/ContentTemplate'
import PostFeeder from '../../organisms/PostView/PostFeeder'
import { PostData } from '../../../lib/types'
import PostView from '../../organisms/PostView/PostView'

export type PostPageProps = {
  slug: string
}

export default class PostPage extends React.Component<PostPageProps>{
  render(){
    return (
      <ContentTemplate>
        <PostFeeder
        slug={ this.props.slug }
        postFactory={
          (post : PostData) => {
            return <PostView post={ post } />
          }
        } />
      </ContentTemplate>
    )
  }
}