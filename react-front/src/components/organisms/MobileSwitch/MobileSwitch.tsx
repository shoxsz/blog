import React from 'react'
import Div from '../../atoms/Div/Div'


import './MobileSwitch.sass'

export type MobileSwitchProps = {
  content: React.ReactNode,
  mobileContent: React.ReactNode
}

export default class MobileSwitch extends React.Component<MobileSwitchProps>{
  render(){
    return (
      <>
        <Div className="switch-content">
          { this.props.content }
        </Div>
        <Div className="switch-content-mobile">
          { this.props.mobileContent }
        </Div>
      </>
    )
  }
}