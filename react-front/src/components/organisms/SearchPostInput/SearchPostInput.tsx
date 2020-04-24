import React from 'react'
import Div from '../../atoms/Div/Div'
import SearchInput from '../../molecules/SearchInput/SearchInput'

export type SearchPostInputProps = {

}

export default class SearchPostInput extends React.Component<SearchPostInputProps>{
  render(){
    return (
      <Div className="search-post-input">
        <SearchInput placeholder="Buscar posts" onSearch={ (text) => this.searchPosts(text) } />
      </Div>
    )
  }

  private searchPosts(text: string){
    
  }
}