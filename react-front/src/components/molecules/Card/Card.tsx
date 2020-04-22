import React from 'react'
import Div from '../../atoms/Div/Div'

export type CardProps = {
  borderRadius?: string
  margin?: string
  padding?: string
}

export default class Card extends React.Component<CardProps>{
  render(){
    return (
      <Div
      margin={ this.props.margin }
      padding={ this.props.padding || "8px" }
      borderRadius={ this.props.borderRadius || "8px" }
      boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.75)">
        { this.props.children }
      </Div>
    )
  }
}