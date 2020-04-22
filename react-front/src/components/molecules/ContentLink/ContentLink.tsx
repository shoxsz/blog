import React from 'react'

export type ContentLinkProps = {
  link: string
}

export default class ContentLink extends React.Component<ContentLinkProps>{
  render(){
    return (
      <span
      onClick={ () => this.handleClick() }
      >{ this.props.children }</span>
    )
  }

  private handleClick(){
    window.open(this.props.link, "__blank")
  }
}