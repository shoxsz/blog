import React from 'react'
import Div from '../../../atoms/Div/Div'
import { Link } from 'react-router-dom'
import CircularImage from '../../../atoms/CircularImage/CircularImage'

import './MobileHeader.sass'
import SocialList from '../SocialList'
import HeaderList from '../HeaderList'

type MobileHeaderState = {
  expand: boolean
}

export default class MobileHeader extends React.Component<{}, MobileHeaderState>{
  public constructor(props){
    super(props)

    this.state = {
      expand: false
    }
  }

  render(){
    return (
      <Div className={ this.getClassNames() } alignSelf="center">
        <Div display="flex" alignItems="center">
          <Div mb="8px" display="flex">
            <CircularImage divColor="white" width="96px" height="96px" image="/logo.png" />
          </Div>
          <Div className="header__title" ml="16px">
            <Link to="/"><h2>CRACK THA GAME DEV</h2></Link>
          </Div>
          <Div className="header__menu" ml="auto" onClick={ () => this.switchMenu() }>
            <i className={ this.getMenuIcon() }></i>
          </Div>
        </Div>
        { this.renderExpandedMenu() }
      </Div>
    )
  }

  private renderExpandedMenu(){
    if(this.state.expand){
      return (
        <Div>
          <Div mb="64px">
            <SocialList direction="horizontal" itemSize="42px" />
          </Div>
          <HeaderList vertical/>
        </Div>
      )
    }
  }

  private getClassNames(){
    const classNames = ["mobile-header", "header"]

    if(this.state.expand){
      classNames.push("expand")
    }

    return classNames.join(' ')
  }

  private getMenuIcon(){
    if(this.state.expand){
      return "fa fa-times"
    }

    return "fas fa-bars"
  }

  private switchMenu(){
    const expand = !this.state.expand
    this.setState({ expand })
  }
}