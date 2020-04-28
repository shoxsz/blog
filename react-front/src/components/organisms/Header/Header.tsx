import React from 'react'
import Div from '../../atoms/Div/Div'

import './Header.sass'
import CircularImage from '../../atoms/CircularImage/CircularImage'
import IconLink from '../../molecules/IconLink/IconLink'
import HeaderItemList from './HeaderListItem'
import HeaderList from './HeaderList'
import SocialList from './SocialList'
import MobileSwitch from '../MobileSwitch/MobileSwitch'
import Toggable from '../Toggable/Toggable'
import MobileMenu from './MobileMenu/MobileMenu'

export type HeaderProps = {

}

export default class Header extends React.Component<HeaderProps>{
  render(){
    return (
      <Div className="header" display="flex" alignItems="center" alignSelf="center">
        <Div mb="8px" display="flex">
          <CircularImage divColor="white" width="96px" height="96px" image="/minotaur.png" />
        </Div>
        <Div ml="16px">
          <h2 className="header__title">CRACK THA GAME DEV</h2>
        </Div>
        <Div ml="auto">
          <MobileSwitch
          content={
            <Div display="flex" alignItems="center">
              <HeaderList/>
              <SocialList/>
            </Div>
          }
          mobileContent={
            <Toggable>
              <MobileMenu/>
            </Toggable>
          }/>
        </Div>

      </Div>
    )
  }
}