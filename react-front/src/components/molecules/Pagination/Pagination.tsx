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
          <Div onClick={ () => this.handleLeftClick() } className="paginator__button paginator__left"><i className="fa fa-caret-left"></i>Anterior</Div>
          { this.renderNextButton(-1) }
          { this.renderNextButton(0) }
          { this.renderNextButton(1) }
          <Div onClick={ () => this.handleRightClick() } className="paginator__button paginator__right">Próximo<i className="fa fa-caret-right"></i></Div>
        </Div>
      </Div>
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