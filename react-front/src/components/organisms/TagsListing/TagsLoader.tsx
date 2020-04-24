import React from "react";
import TagsListingSearch from "./TagsListingSearch";
import { app } from "../../../app";
import { TagData } from "../../../lib/types";

type TagsLoaderState = {
  loadingTags: boolean,
  tags: TagData[]
}

export type TagsLoaderProps = {

}

export default class TagsLoader extends React.Component<TagsLoaderProps, TagsLoaderState>{
  readonly appSub : any

  public constructor(props){
    super(props)

    this.state = {
      loadingTags: true,
      tags: []
    }

    this.appSub = app.subscribe(() => this.handleAppState())
  }

  private handleAppState(){
    this.setState({ loadingTags: false, tags: app.getTags() })
  }

  componentDidMount(){
    app.loadTags()
  }

  componentWillUnmount(){
    this.appSub()
  }

  render(){
    if(this.state.loadingTags){
      return <span>Loading tags...</span>
    }

    return (
      <TagsListingSearch tags={ this.state.tags }/>
    )
  }
}