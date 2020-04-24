import React from 'react'
import Div from '../../atoms/Div/Div'
import Tag from '../../atoms/Tag/Tag'
import { TagData } from '../../../lib/types'

export type TagsListingProps = {
  tags: TagData[]
  onSelectTag: (tagData : TagData) => void
}

export default class TagsListing extends React.Component<TagsListingProps>{
  render(){
    return (
      <Div className="tag-list" display="flex" flexWrap="wrap">
        { this.renderTags() }
      </Div>
    )
  }

  private renderTags(){
    return this.props.tags.map((tag, index) => {
      return (
        <Div key={ index } mb="4px" ml="4px" onClick={ () => this.props.onSelectTag(tag) }>
          <Tag tag={ tag } />
        </Div>
      )
    })
  }
}