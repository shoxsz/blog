import React from 'react'
import Card from '../molecules/Card/Card'

export default class ContentTemplate extends React.Component<{}>{
  render(){
    return (
      <Card className="content-card" margin="48px" padding="48px">
        { this.props.children }
      </Card>
    )
  }
}