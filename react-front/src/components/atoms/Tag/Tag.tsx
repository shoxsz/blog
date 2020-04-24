import React from 'react'
import { TagData } from '../../../lib/types'

import './Tag.sass'
import Div from '../Div/Div'

export type TagProps = {
  tag: TagData
}

export default class Tag extends React.Component<TagProps>{
  render(){
    return (
      <Div className="tag">{ this.props.tag.tagName }</Div>
    )
  }
}