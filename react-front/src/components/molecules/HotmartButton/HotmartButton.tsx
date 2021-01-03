import React from 'react';

import './HotmartButton.sass'

export type HotmartButtonProps = {

  text: string;

  link: string;

}

export default class HotmartButton extends React.Component<HotmartButtonProps> {
  render() {
    return (<a target="_blank" className="hotmart-button-link" href={ this.props.link }>
      { this.props.text }
    </a>);
  }
}