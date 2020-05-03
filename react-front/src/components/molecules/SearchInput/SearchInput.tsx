import React from 'react'
import Div from '../../atoms/Div/Div'

import './SearchInput.sass'

type SearchInputState = {
  text: string
}

export type SearchInputProps = {
  placeholder?: string
  onSearch: (searchString: string) => void
  onSearchStringChange?: (searchString: string) => void
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
        <Div mr="4px" width="100%">
          <input type="text" onKeyDown={ (event) => this.handleKeyDown(event) } placeholder="Buscar post" onChange={ (event) => this.handleTextChange(event) }/>
        </Div>
        <button onClick={ () => this.handleSearch() }>
          <i className="fa fa-search"></i>
        </button>
      </Div>
    )
  }

  private handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>){
    if(event.key === "Enter"){
      this.handleSearch()
    }
  }

  private handleTextChange(event : React.ChangeEvent<HTMLInputElement>){
    this.setState({
      text: event.target.value
    })

    if(!!this.props.onSearchStringChange){
      this.props.onSearchStringChange(event.target.value)
    }
  }

  private handleSearch(){
    this.props.onSearch(this.state.text)
  }
}