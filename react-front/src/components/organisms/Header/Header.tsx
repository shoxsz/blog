import React from 'react'
import Div from '../../atoms/Div/Div'

import './Header.sass'
import CircularImage from '../../atoms/CircularImage/CircularImage'
import IconLink from '../../molecules/IconLink/IconLink'
import HeaderItemList from './HeaderListItem'
import HeaderList from './HeaderList'
import SocialList from './SocialList'
import MobileSwitch from '../MobileSwitch/MobileSwitch'
import { Link } from 'react-router-dom'
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