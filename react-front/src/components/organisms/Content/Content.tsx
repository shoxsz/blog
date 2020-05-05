import React from 'react'
import Div from '../../atoms/Div/Div'
import Card from '../../molecules/Card/Card'
import PostPreview from '../PostPreview/PostPreview'
import PostList from '../PostList/PostList'

import './Content.sass'
import ContentRight from '../ContentRight/ContentRight'
import PostsFeeder from '../PostList/PostsFeeder'
import PostsPagination from '../PostsPagination/PostsPagination'

export type ContentProps = {

}

export default class Content extends React.Component<ContentProps>{
  render(){
    return (
      <Card className="content-card" margin="24px" padding="24px">
        <Div display="flex" width="100%" flexWrap="wrap">
          <Div className="content__left">
            <Div mb="32px">
              <PostsFeeder 
              postListFactory={
                (posts) => <PostList posts={ posts } horizontal />
              }/>
            </Div>
            <PostsPagination/>
          </Div>
          <Div className="content__right">
            <ContentRight/>
          </Div>
        </Div>
      </Card>
    )
  }
}