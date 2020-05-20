import React from 'react'
import Div from '../../atoms/Div/Div'
import SearchPostInput from '../SearchPostInput/SearchPostInput'
import TagsListingSearch from '../TagsListing/TagsListingSearch'
import TagsLoader from '../TagsListing/TagsLoader'
import { Link } from 'react-router-dom'
import IconLink from '../../molecules/IconLink/IconLink'
import SocialLinkList from '../../molecules/SocialLinkList/SocialLinkList'
import BlogLinks from '../../molecules/BlogLinks/BlogLinks'

export type ContentRightProps = {
  width?: string
}

export default class ContentRight extends React.Component<ContentRightProps>{
  render(){
    return (
      <Div width={ this.props.width || "100%" }>
        <SearchPostInput/>
        <Div mt="16px">
          <SocialLinkList/>
          <Div mt="16px">
            <h3>Tags</h3>
            <TagsLoader/>
          </Div>
          <Div mt="16px">
            <h3>Links</h3>
            <BlogLinks/>
          </Div>
        </Div>
      </Div>
    )
  }
}
