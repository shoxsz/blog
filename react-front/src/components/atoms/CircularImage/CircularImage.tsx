import React from 'react'
import Div from '../Div/Div'

import './CircularImage.sass'

export type CircularImageProps = {
  width: string
  height?: string
  image: string

  divColor?: string
}

export default class CircularImage extends React.Component<CircularImageProps>{
  render(){
    return (
      <Div
      className={ this.getImageClasses() }
      backgroundColor={ this.props.divColor }>
        <img width={ this.props.width } height={ this.props.height }  src={ this.props.image } />
      </Div>
    )
  }

  private getImageClasses(){
    const classNames = ["circular-image"]

    return classNames.join(" ")
  }
}