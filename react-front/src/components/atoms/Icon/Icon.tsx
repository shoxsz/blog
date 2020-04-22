import React from 'react'

import './Icon.sass'

type IconState = {
  color?: string
  cursor?: string
}

export type IconProps = {
  icon: string
  color?: string
  hoverColor?: string
  hoverHand?: boolean
  fontSize?: string
  onClick?: () => void
}

export default class Icon extends React.Component<IconProps, IconState>{
  public constructor(props : IconProps){
    super(props)

    this.state = {
      color: this.props.color || this.props.hoverColor,
      cursor: 'pointer'
    }
  }

  render(){
    return (
      <i
        onClick={ () => this.handleOnClick() }
        onMouseEnter={ () => this.handleHover(true) }
        onMouseLeave={ () => this.handleHover(false) }
        className={ this.buildClassNames() }
        style={ { color: this.state.color, fontSize: this.props.fontSize } }
      >
      </i>
    )
  }

  private buildClassNames(){
    const classNames = [ this.props.icon ]

    if(this.props.hoverHand){
      classNames.push("icon-hoverable")
    }

    return classNames.join(" ")
  }

  private handleOnClick(){
    if(!!this.props.onClick){
      this.props.onClick()
    }    
  }

  private handleHover(isHover : boolean){
    if(isHover){
      this.setState({
        color: this.props.hoverColor || this.props.color
      })
    }else{
      this.setState({
        color: this.props.color || this.props.hoverColor
      })
    }
  }
}