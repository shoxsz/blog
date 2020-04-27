import React from 'react'
import Div from '../../atoms/Div/Div'

import './Header.sass'
import CircularImage from '../../atoms/CircularImage/CircularImage'
import IconLink from '../../molecules/IconLink/IconLink'
import ContentLink from '../../molecules/ContentLink/ContentLink'
import HeaderItemList from './HeaderListItem'
import HeaderList from './HeaderList'
import SocialList from './SocialList'

export type HeaderProps = {

}

export default class Header extends React.Component<HeaderProps>{
  render(){
    return (
      <Div className="header" display="flex" alignItems="center" alignSelf="center">
        <Div mr="8px">
          <CircularImage divColor="white" width="96px" height="96px" image="/minotaur.png" />
        </Div>
        <Div color="#969595"><h1>Crack Tha Game Dev</h1></Div>
        <Div ml="auto" display="flex" alignItems="center">
          <HeaderList/>
          <SocialList/>
        </Div>
      </Div>
    )
  }
}