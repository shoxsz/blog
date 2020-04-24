import React from 'react'
import Div from '../../atoms/Div/Div'
import Tag from '../../atoms/Tag/Tag'
import { TagData } from '../../../lib/types'

export type TagsListingProps = {
  onSelectTag: (tagData : TagData) => void
}

export default class TagsListing extends React.Component<TagsListingProps>{
  tagsList = [
    {
      tagName: 'Game programming',
      tagPercentage: 78
    },
    {
      tagName: 'OpenGL',
      tagPercentage: 33
    },
    {
      tagName: 'OpenGL',
      tagPercentage: 33
    },
    {
      tagName: 'OpenGL',
      tagPercentage: 33
    },
    {
      tagName: 'OpenGL',
      tagPercentage: 33
    },
    {
      tagName: 'OpenGL',
      tagPercentage: 33
    }
  ]

  render(){
    return (
      <Div className="tag-list" display="flex" flexWrap="wrap">
        { this.renderTags() }
      </Div>
    )
  }

  private renderTags(){
    return this.tagsList.map(tag => {
      return (
        <Div mb="4px" ml="4px" onClick={ () => this.props.onSelectTag(tag) }>
          <Tag tag={ tag } />
        </Div>
      )
    })
  }
}