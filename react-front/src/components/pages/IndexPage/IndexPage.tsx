import React from 'react'
import Div from '../../atoms/Div/Div'

import './IndexPage.sass'
import Icon from '../../atoms/Icon/Icon'

export type IndexPageProps = {
  
}

export default class IndexPage extends React.Component<IndexPageProps>{
  render(){
    return (
      <Div className="content">
        <Div className="left-content">
          <Icon icon="fa fa-eye" color="red" hoverColor="blue" hoverHand />
        </Div>
      </Div>
    )
  }
}
