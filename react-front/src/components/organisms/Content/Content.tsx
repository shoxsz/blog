import React from 'react'
import Div from '../../atoms/Div/Div'
import Card from '../../molecules/Card/Card'

export type ContentProps = {

}

export default class Content extends React.Component<ContentProps>{
  render(){
    return (
      <Card margin="48px">
        <Div display="flex">
          <Div>
            <p>Posts come here</p>
          </Div>
          <Div>
            <p>Navigator comes here</p>
          </Div>
        </Div>
      </Card>
    )
  }
}