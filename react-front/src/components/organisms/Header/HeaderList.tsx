import React from 'react'
import Div from '../../atoms/Div/Div'
import HeaderItemList from './HeaderListItem'

export type HeaderListProps = {
  vertical?: boolean
}

export default class HeaderList extends React.Component<HeaderListProps>{
  render(){
    return (
      <Div display="flex" flexDirection={ this.getFlexDirection() }>
        <Div mr={ this.getItemMR() } mb={ this.getItemMB() }>
          <HeaderItemList link="/" text="Blog"/>
        </Div>
        <Div mr={ this.getItemMR() } mb={ this.getItemMB() }>
          <HeaderItemList link="/about" text="Sobre" />
        </Div>
      </Div>
    )
  }

  private getFlexDirection(){
    return !!this.props.vertical ? "column" : "row"
  }

  private getItemMR(){
    return !!this.props.vertical ? "0px" : "16px"
  }

  private getItemMB(){
    return !!this.props.vertical ? "16px" : "0px"
  }
}