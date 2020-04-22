import React from 'react'
import Div from '../../atoms/Div/Div'
import HeaderItemList from './HeaderListItem'

export type HeaderListProps = {

}

export default class HeaderList extends React.Component<HeaderListProps>{
  render(){
    return (
      <Div display="flex">
        <HeaderItemList link="/" text="Blog" />
        <HeaderItemList link="/about" text="Sobre" />
      </Div>
    )
  }
}