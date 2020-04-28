import React from 'react'
import Div from '../../atoms/Div/Div'
import IconLink from '../../molecules/IconLink/IconLink'

export type SocialListProps = {
  direction?: "horizontal" | "vertical"
  centerContent?: boolean
  itemSize?: string
}

export default class SocialList extends React.Component<SocialListProps>{
  render(){
    return (
      <Div display="flex" flexDirection={ this.getFlexDirection() } justifyContent="center">
        <Div mb={ this.getMarginBottom() } mr={ this.getMarginRight() }>
          <IconLink icon="fa fa-instagram" color="white" fontSize={ this.getFontSize() } link="https://instagram.com" />
        </Div>
        <IconLink icon="fa fa-github" color="white" fontSize={ this.getFontSize() } link="https://github.com" />
      </Div>
    )
  }

  private getFlexDirection(){
    return (this.props.direction === "horizontal" ? "row" : "column")
  }

  private getMarginBottom(){
    return (this.props.direction === "horizontal" ? undefined : "4px")
  }

  private getMarginRight(){
    return (this.props.direction === "horizontal" ? "8px" : undefined)
  }

  private getFontSize(){
    return this.props.itemSize || "24px"
  }
}