import React from 'react'
import TagsListing from './TagsListing'
import { TagData } from '../../../lib/types'

export type TagsListingSearchProps = {
  tags: TagData[]
}

export default class TagsListingSearch extends React.Component<TagsListingSearchProps>{
  render(){
    return (
      <TagsListing tags={ this.props.tags } onSelectTag={ (tag) => this.searchTag(tag) } />
    )
  }

  private searchTag(tag : TagData){

  }
}