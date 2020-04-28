import React from 'react'
import Div from '../../atoms/Div/Div'
import ContentLink from '../../molecules/ContentLink/ContentLink'

export type HeaderItemListProps = {
  text: string
  link: string
}

export default class HeaderItemList extends React.Component<HeaderItemListProps>{
  render(){
    return (
      <Div className="header-labels">
        <ContentLink link={ this.props.link }><h2>{ this.props.text }</h2></ContentLink>
      </Div>
    )
  }
}