import React from 'react'
import TagsListing from './TagsListing'
import { TagData } from '../../../lib/types'

export type TagsListingSearchProps = {

}

export default class TagsListingSearch extends React.Component<TagsListingSearchProps>{
  render(){
    return (
      <TagsListing onSelectTag={ (tag) => this.searchTag(tag) } />
    )
  }

  private searchTag(tag : TagData){

  }
}