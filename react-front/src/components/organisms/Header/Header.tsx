import React from 'react'
import Div from '../../atoms/Div/Div'

import './Header.sass'
import MobileSwitch from '../MobileSwitch/MobileSwitch'
import MobileHeader from './MobileHeader/MobileHeader'
import WideHeader from './WideHeader/WideHeader'

export type HeaderProps = {

}

export default class Header extends React.Component<HeaderProps>{
  render(){
    return (
      <Div ml="auto">
        <MobileSwitch
        content={<WideHeader/>}
        mobileContent={<MobileHeader/>}/>
      </Div>
    )
  }
}