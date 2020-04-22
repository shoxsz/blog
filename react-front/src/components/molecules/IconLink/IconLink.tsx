import React from 'react'
import Icon, { IconProps } from '../../atoms/Icon/Icon'

export type IconLinkProps = IconProps & {
  link: string
}

export default class IconLink extends React.Component<IconLinkProps>{
  render(){
    return (
      <Icon hoverHand { ...this.props } onClick={ () => this.onClick() } />
    )
  }

  private onClick(){
    window.open(this.props.link, "__blank")
  }
}