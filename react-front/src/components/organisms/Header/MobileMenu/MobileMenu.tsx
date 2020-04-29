import React from 'react'
import Div from '../../../atoms/Div/Div'

import './MobileMenu.sass'
import SocialList from '../SocialList'
import CircularImage from '../../../atoms/CircularImage/CircularImage'
import HeaderList from '../HeaderList'
import { Link } from 'react-router-dom'

export default class MobileMenu extends React.Component<{}>{
  render(){
    return (
      <Div className="mobile-menu">
        <Div display="flex" alignItems="center">
          <Div mr="8px" display="flex">
            <CircularImage divColor="white" width="96px" height="96px" image="/minotaur.png" />
          </Div>
          <Div className="mobile-menu__title">
            <Link to="/"><h2>CRACK THA GAME DEV</h2></Link>
          </Div>
        </Div>
        <Div mb="64px">
          <SocialList direction="horizontal" itemSize="42px" />
        </Div>
        <HeaderList vertical/>
      </Div>
    )
  }
}