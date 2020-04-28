import React from 'react'
import Div from '../../atoms/Div/Div'
import { Link } from 'react-router-dom'

import './HeaderListItem.sass'

export type HeaderItemListProps = {
  text: string
  link: string
  openWindow?: boolean
}

export default class HeaderItemList extends React.Component<HeaderItemListProps>{
  render(){
    return (
      <Div className="header-labels">
        <Link to={ this.props.link } target={ !!this.props.openWindow ? "_blank" : "_parent" }>
          <h2>{ this.props.text }</h2>
        </Link>
      </Div>
    )
  }
}