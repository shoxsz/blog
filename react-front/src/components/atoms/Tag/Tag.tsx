import React from 'react'
import { TagData } from '../../../lib/types'

import './Tag.sass'
import Div from '../Div/Div'

export type TagProps = {
  tag: TagData
  onClick?: (tag: TagData) => void
}

export default class Tag extends React.Component<TagProps>{
  render(){
    return (
      <Div onClick={ () => this.handleClick() } className="tag">{ this.props.tag.title }</Div>
    )
  }

  private handleClick(){
    if(!!this.props.onClick){
      this.props.onClick(this.props.tag)
    }
  }
}