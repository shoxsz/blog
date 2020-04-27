import React from 'react'
import Div from '../../atoms/Div/Div'

declare global {
  interface Window { disqus_config: () => void, page: { url: string, identifier: string } }
}

export type DisqusProps = {
  pageUrl?: string
  pageId?: string
}

export default class Disqus extends React.Component<DisqusProps>{
  disqusScript : any
  disqusScriptParent : any
  
  componentDidMount(){
    this.setDisqusVariables()
    this.createDisqusScript()
  }

  private setDisqusVariables(){
    const props = this.props
    window.disqus_config = function(){
      this.page.url = props.pageUrl || window.location.href
      this.page.identifier = props.pageId || window.location.href
    }
  }

  private createDisqusScript(){
    const script = document.createElement("script")
    script.src = "https://localhost-3000-qulthbtzpa.disqus.com/embed.js"
    script.setAttribute("data-timestamp", new Date().toString());
    script.setAttribute("id", "disqus_script_unique");
    this.disqusScriptParent = document.head || document.body
    this.disqusScriptParent.appendChild(script)

    this.disqusScript = script
  }

  componentWillUnmount(){
    this.disqusScriptParent.removeChild(this.disqusScript)
  }

  render(){
    return (
      <Div id="disqus_thread"></Div>
    )
  }
}