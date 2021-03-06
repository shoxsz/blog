import React from 'react'
import Div from '../../atoms/Div/Div'

import './IndexPage.sass'
import Icon from '../../atoms/Icon/Icon'
import Content from '../../organisms/Content/Content'
import Header from '../../organisms/Header/Header'

export type IndexPageProps = {
  
}

export default class IndexPage extends React.Component<IndexPageProps>{
  render(){
    return (
      <>
      <Header/>
      <Content/>
      </>
    )
  }
}
