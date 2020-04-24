import React from "react";
import TagsListingSearch from "./TagsListingSearch";
import { app } from "../../../app";
import { TagData } from "../../../lib/types";

type TagsLoaderState = {
  loading: boolean,
  tags: TagData[]
}

export type TagsLoaderProps = {

}

export default class TagsLoader extends React.Component<TagsLoaderProps, TagsLoaderState>{
  readonly appSub : any

  public constructor(props){
    super(props)

    this.state = {
      loading: true,
      tags: []
    }

    this.appSub = app.subscribe(() => this.handleAppState())
  }

  private handleAppState(){
    if(this.state.loading){
      const tags = app.getTags()
      if(tags.length > 0){
        this.setState({ loading: false, tags })
      }
    }
  }

  componentDidMount(){
    app.loadTags()
  }

  componentWillUnmount(){
    this.appSub()
  }

  render(){
    if(this.state.loading){
      return <span>Loading tags...</span>
    }

    return (
      <TagsListingSearch tags={ this.state.tags }/>
    )
  }
}