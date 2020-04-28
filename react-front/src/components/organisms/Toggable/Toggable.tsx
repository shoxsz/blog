import React from 'react'
import Div from '../../atoms/Div/Div'

import './Toggable.sass'

type ToggableState = {
  expand: boolean
}

export type ToggableProps = {
  expanded?: boolean
  expandIcon?: string
  hideIcon?: string
}

export default class Toggable extends React.Component<ToggableProps, ToggableState>{
  public constructor(props){
    super(props)

    this.state = {
      expand: this.props.expanded || false
    }
  }
  
  render(){
    return (
      <Div className="toggable">
        <Div className="toggable__icon" onClick={ () => this.handleToggle() }>
          <i className={ this.getToggableIcon() }></i>
        </Div>
        { this.renderContent() }
      </Div>
    )
  }

  private renderContent(){
    if(this.state.expand){
      return (
        <Div>
          { this.props.children }
        </Div>
      )
    }
  }

  private handleToggle(){
    this.setState({ expand: !this.state.expand })
  }

  private getToggableIcon(){
    if(this.state.expand){
      return this.props.hideIcon || "fa fa-times"
    }

    return this.props.expandIcon || "fas fa-bars"
  }
}