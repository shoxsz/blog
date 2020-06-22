import React from 'react'
import IconLink from '../IconLink/IconLink'

import './SocialLinkList.sass'
import Div from '../../atoms/Div/Div'

const SocialLinkList : React.FunctionComponent<{}> = function(props){
  return (
    <Div className="social-link-list">
      <h3>Redes sociais</h3>
      <ul>
        <li>
          <IconLink fontSize="24px" link="https://instagram.com/crackthagamedev" icon="fa fa-instagram" label="Instagram"/>
        </li>
        <li>
          <IconLink fontSize="24px" link="https://github.com/shoxsz" icon="fa fa-github" label="Github"/>
        </li>
        <li>
          <IconLink fontSize="24px" link="https://play.google.com/store/apps/developer?id=Crack+It+Games" icon="fa fa-play" label="Play Store"/>
        </li>
      </ul>
    </Div>
  )
}

export default SocialLinkList