import React from 'react'
import Div from '../../../atoms/Div/Div'

import './MobileMenu.sass'
import SocialList from '../SocialList'
import CircularImage from '../../../atoms/CircularImage/CircularImage'
import HeaderList from '../HeaderList'

export default class MobileMenu extends React.Component<{}>{
  render(){
    return (
      <Div className="mobile-menu">
        <Div mb="16px" display="flex">
          <CircularImage divColor="white" width="96px" height="96px" image="/minotaur.png" />
        </Div>
        <Div mb="64px">
          <SocialList direction="horizontal" itemSize="42px" />
        </Div>
        <HeaderList vertical/>
      </Div>
    )
  }
}