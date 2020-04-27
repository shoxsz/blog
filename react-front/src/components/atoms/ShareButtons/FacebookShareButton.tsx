import React from 'react'
import { FacebookShareButton as ReactFacebookShareButton, FacebookIcon } from 'react-share'

export type FacebookShareButtonProps = {
  url: string
  size?: number
}

const FacebookShareButton : React.FunctionComponent<FacebookShareButtonProps> = function(props){
  return (
    <ReactFacebookShareButton  url={ props.url }>
      <FacebookIcon borderRadius={ 4 } size={ props.size || 64 } />
    </ReactFacebookShareButton>
  )
}

export default FacebookShareButton