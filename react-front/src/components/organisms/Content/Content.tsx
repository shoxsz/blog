import React from 'react'
import Div from '../../atoms/Div/Div'
import Card from '../../molecules/Card/Card'
import PostPreview from '../PostPreview/PostPreview'
import PostList from '../PostList/PostList'

import './Content.sass'
import ContentRight from '../ContentRight/ContentRight'
import PostsLoader from '../PostList/PostsLoader'

export type ContentProps = {

}

export default class Content extends React.Component<ContentProps>{
  render(){
    return (
      <Card className="content-card" margin="48px" padding="48px">
        <Div display="flex" width="100%" flexWrap="wrap">
          <Div className="content__left">
            <PostsLoader 
            postListFactory={
              (posts) => <PostList posts={ posts } horizontal />
            }/>
          </Div>
          <Div className="content__right">
            <ContentRight/>
          </Div>
        </Div>
      </Card>
    )
  }
}