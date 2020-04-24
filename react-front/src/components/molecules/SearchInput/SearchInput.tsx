import React, { ChangeEvent } from 'react'
import Div from '../../atoms/Div/Div'

import './SearchInput.sass'

type SearchInputState = {
  text: string
}

export type SearchInputProps = {
  placeholder?: string
  onSearch: (searchString: string) => void
}

export default class SearchInput extends React.Component<SearchInputProps, SearchInputState>{
  public constructor(props : SearchInputProps){
    super(props)

    this.state = {
      text: ''
    }
  }

  render(){
    return (
      <Div className="search-input" display="flex" alignItems="flex-end">
        <Div mr="4px">
          <input type="text" placeholder="Buscar post" onChange={ (event) => this.handleTextChange(event) }/>
        </Div>
        <button onClick={ () => this.props.onSearch(this.state.text) }>
          <i className="fa fa-search"></i>
        </button>
      </Div>
    )
  }

  private handleTextChange(event : ChangeEvent<HTMLInputElement>){
    this.setState({
      text: event.target.value
    })
  }
}