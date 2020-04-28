import React from 'react'
import Icon, { IconProps } from '../../atoms/Icon/Icon'
import Div from '../../atoms/Div/Div'

import './IconLink.sass'

export type IconLinkProps = IconProps & {
  link: string
  label?: string
  labelLeft?: boolean
}

export default class IconLink extends React.Component<IconLinkProps>{
  render(){
    return (
      <Div className="icon-link" display="inline" onClick={ () => this.onClick() }>
        { this.renderLeftContent() }
        <span className={ this.getIconClassName() }>
          <Icon hoverHand { ...this.props }/>
        </span>
        { this.renderRightContent() }
      </Div>
    )
  }

  private renderLeftContent(){
    if(!!this.props.label && !!this.props.labelLeft){
      return this.renderLabel()
    }
  }

  private renderRightContent(){
    if(!!this.props.label && !this.props.labelLeft){
      return this.renderLabel()
    }
  }

  private renderLabel(){
    return <span style={ { fontSize: this.props.fontSize } }>{ this.props.label }</span>
  }

  private getIconClassName(){
    if(!this.props.label) return undefined

    if(!!this.props.labelLeft) return "icon-link-right"

    return "icon-link-left"
  }

  private onClick(){
    window.open(this.props.link, "__blank")
  }
}