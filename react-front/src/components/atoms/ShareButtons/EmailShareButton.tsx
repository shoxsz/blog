import React from 'react'
import { EmailShareButton as ReactEmailShareButton, EmailIcon } from 'react-share'

export type EmailShareButtonProps = {
  url: string
  size?: number
}

const EmailShareButton : React.FunctionComponent<EmailShareButtonProps> = function(props){
  return (
    <ReactEmailShareButton  url={ props.url }>
      <EmailIcon borderRadius={ 4 } size={ props.size || 64 } />
    </ReactEmailShareButton>
  )
}

export default EmailShareButton