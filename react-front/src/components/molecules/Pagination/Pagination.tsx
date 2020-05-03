import React from 'react'
import Div from '../../atoms/Div/Div'

import './Pagination.sass'

type PaginationState = {
  page: number
}

export type PaginationProps = {
  maxPages: number
  startPage?: number
  onPageChange: (page : number) => void
}

export default class Pagination extends React.Component<PaginationProps, PaginationState>{
  public constructor(props : PaginationProps){
    super(props)

    this.state = {
      page: props.startPage || 1
    }
  }

  render(){
    return (
      <Div display="flex">
        <Div className="paginator" margin="auto" display="flex" alignItems="center">
          { this.renderPageButton("left", "Anterior", () => this.handleLeftClick()) }
          { this.renderNextButton(-1) }
          { this.renderNextButton(0) }
          { this.renderNextButton(1) }
          { this.renderPageButton("right", "Próximo", () => this.handleRightClick()) }
        </Div>
      </Div>
    )
  }

  private renderPageButton(side : string, text : string, callback : () => void){
    return (
      <Div
      onClick={ callback }
      className={ `paginator__button paginator__${side}` }>
        { side == "right" && this.renderPageButtonText(text) }
        <i className={ `fa fa-caret-${side}` }></i>
        { side == "left" && this.renderPageButtonText(text) }
      </Div>
    )
  }

  private renderPageButtonText(text : string){
    return (
      <span className="paginator__text_button">
        { text }
      </span>
    )
  }

  private renderNextButton(offset : number){
    const page = this.state.page + offset
    if(page >= 1 && page <= this.props.maxPages){
      return (
        <span onClick={ () => this.handlePageChange(page) } className={ `paginator__button paginator__next ${page == this.state.page ? 'paginator__page' : ''}` }>{ page }</span>
      )
    }
  }

  private handleLeftClick(){
    this.updatePage(Math.max(1, this.state.page - 1))
  }

  private handleRightClick(){
    this.updatePage(Math.min(this.props.maxPages, this.state.page + 1))
  }

  private handlePageChange(page : number){
    this.updatePage(page)
  }

  private updatePage(page : number){
    if(page != this.state.page){
      this.setState({ page })
      this.props.onPageChange(page)
    }
  }
}