import React from 'react'
import Div from '../../atoms/Div/Div'
import Card from '../../molecules/Card/Card'
import PostPreview from '../PostPreview/PostPreview'
import PostList from '../PostList/PostList'

import './Content.sass'
import ContentRight from '../ContentRight/ContentRight'

export type ContentProps = {

}

export default class Content extends React.Component<ContentProps>{
  render(){
    return (
      <Card className="content-card" margin="48px" padding="48px">
        <Div display="flex" width="100%">
          <PostList width="78%" horizontal/>
          <ContentRight width="22%"/>
        </Div>
      </Card>
    )
  }
}