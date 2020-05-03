import React from 'react'
import Div from '../../../atoms/Div/Div'
import HeaderList from '../HeaderList'
import SocialList from '../SocialList'
import { Link } from 'react-router-dom'
import CircularImage from '../../../atoms/CircularImage/CircularImage'

const WideHeader : React.FC<{}> = function(props){
  return (
    <Div className="header" display="flex" alignItems="center" alignSelf="center">
      <Div mb="8px" display="flex">
        <CircularImage divColor="white" width="96px" height="96px" image="/minotaur.png" />
      </Div>
      <Div className="header__title" ml="16px">
        <Link to="/"><h2>CRACK THA GAME DEV</h2></Link>
      </Div>
      <Div className="header__menu" ml="auto">
        <Div display="flex" alignItems="center">
          <HeaderList/>
          <SocialList/>
        </Div>
      </Div>
    </Div>
  )
}

export default WideHeader