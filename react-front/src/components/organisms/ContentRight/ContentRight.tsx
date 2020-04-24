import React from 'react'
import Div from '../../atoms/Div/Div'
import SearchPostInput from '../SearchPostInput/SearchPostInput'
import TagsListingSearch from '../TagsListing/TagsListingSearch'

export type ContentRightProps = {
  width?: string
}

export default class ContentRight extends React.Component<ContentRightProps>{
  render(){
    return (
      <Div width={ this.props.width }>
        <SearchPostInput/>
        <Div mt="16px">
          <h3>Tags</h3>
          <TagsListingSearch/>
        </Div>
      </Div>
    )
  }
}
