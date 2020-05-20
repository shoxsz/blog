import React from 'react'
import Div from '../../atoms/Div/Div'

import './BlogLinks.sass'

export default class BlogLinks extends React.Component<{}>{
  render() : React.ReactNode{
    return (
      <Div className="blog-links" display="flex" flexDirection="column">
        { this.renderBlogLink("The Cherno", "https://www.youtube.com/user/TheChernoProject", "fab fa-youtube", "red") }
        { this.renderBlogLink("Scratchapixel", "https://www.scratchapixel.com/", "fas fa-external-link-square-alt", "#282828") }
        { this.renderBlogLink("Gamasutra", "https://www.gamasutra.com/", "fas fa-external-link-square-alt", "#22522a") }
        { this.renderBlogLink("DankiCode", "https://bit.ly/crie-jogos-do-zero", "fas fa-external-link-square-alt", "#ffa500") }
      </Div>
    )
  }

  renderBlogLink(text : string, link : string, icon : string, color : string){
    return (
      <Div className="blog-link" mb="8px">
        <a target="__blank" href={ link }>
          <i className={ icon } style={ { color } }></i>
          <span>{ text }</span>
        </a>
      </Div>
    )
  }
}