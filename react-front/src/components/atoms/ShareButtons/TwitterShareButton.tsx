import React from 'react'
import { TwitterShareButton as ReactTwitterShareButton, TwitterIcon } from 'react-share'

export type TwitterShareButtonProps = {
  url: string
  size?: number
}

const TwitterShareButton : React.FunctionComponent<TwitterShareButtonProps> = function(props){
  return (
    <ReactTwitterShareButton  url={ props.url }>
      <TwitterIcon borderRadius={ 4 } size={ props.size || 64 } />
    </ReactTwitterShareButton>
  )
}

export default TwitterShareButton