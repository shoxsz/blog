import React from 'react'
import Card from '../molecules/Card/Card'

import './ContentTemplate.sass'

export type ContentTemplateProps = {
  background?: string
}

export default class ContentTemplate extends React.Component<ContentTemplateProps>{
  render(){
    return (
      <Card className="content-card" background={ this.props.background }>
        { this.props.children }
      </Card>
    )
  }
}