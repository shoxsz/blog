import React from 'react'
import Card from '../molecules/Card/Card'

import './ContentTemplate.sass'

export default class ContentTemplate extends React.Component<{}>{
  render(){
    return (
      <Card className="content-card">
        { this.props.children }
      </Card>
    )
  }
}