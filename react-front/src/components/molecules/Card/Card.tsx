import React from 'react'
import Div from '../../atoms/Div/Div'

export type CardProps = {
  borderRadius?: string
  margin?: string
  padding?: string
  className?: string

  onClick?: () => void
}

export default class Card extends React.Component<CardProps>{
  render(){
    return (
      <Div
      onClick={ this.props.onClick }
      className={ this.getClassName() }
      margin={ this.props.margin }
      padding={ this.props.padding || "8px" }
      borderRadius={ this.props.borderRadius || "8px" }
      boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.75)">
        { this.props.children }
      </Div>
    )
  }

  private getClassName(){
    const className = ["card"]

    if(!!this.props.className){
      className.push(this.props.className)
    }

    return className.join(" ")
  }
}