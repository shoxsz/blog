import React from 'react'
import Div from '../../atoms/Div/Div'
import FacebookShareButton from '../../atoms/ShareButtons/FacebookShareButton'
import TwitterShareButton from '../../atoms/ShareButtons/TwitterShareButton'
import EmailShareButton from '../../atoms/ShareButtons/EmailShareButton'


export type FacebookButtonName = "facebook"
export type TwitterButtonName = "twitter"
export type EmailButtonName = "email"

export type ShareButtonName = FacebookButtonName | TwitterButtonName | EmailButtonName

export const AllShareButtons : ShareButtonName[] = ["facebook", "twitter", "email"]

export type ShareButtonGroupProps = {
  buttons?: ShareButtonName[]
  url: string
}

export default class ShareButtonGroup extends React.Component<ShareButtonGroupProps>{
  render(){
    return (
      <Div display="flex">
        { this.renderButtons() }
      </Div>
    )
  }

  private renderButtons(){
    const buttons = this.props.buttons || AllShareButtons

    return buttons.map(button => this.renderButton(button))
  }

  private renderButton(buttonName : ShareButtonName){
    return (
      <Div ml="4px">
        { this.createButton(buttonName) }
      </Div>
    )
  }

  private createButton(buttonName : ShareButtonName){
    switch(buttonName){
      case "facebook":
        return <FacebookShareButton url={ this.props.url } />
      case "twitter":
        return <TwitterShareButton url={ this.props.url } />
      case "email":
        return <EmailShareButton url={ this.props.url } />
    }
  }
}