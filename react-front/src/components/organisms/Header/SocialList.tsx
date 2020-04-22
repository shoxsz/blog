import React from 'react'
import Div from '../../atoms/Div/Div'
import IconLink from '../../molecules/IconLink/IconLink'

export type SocialListProps = {
  direction?: "horizontal" | "vertical"
}

export default class SocialList extends React.Component<SocialListProps>{
  render(){
    return (
      <Div display="flex" flexDirection={ this.getFlexDirection() }>
        <Div mb={ this.getMarginBottom() } mr={ this.getMarginRight() }>
          <IconLink icon="fa fa-instagram" fontSize="24px" link="https://instagram.com" />
        </Div>
        <IconLink icon="fa fa-github" fontSize="24px" link="https://github.com" />
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
    return (this.props.direction === "horizontal" ? "4px" : undefined)
  }
}