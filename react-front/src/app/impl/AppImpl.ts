import App from "../App";
import { createStore } from "redux";
import AppReducer from "../../redux";
import { backendService } from "../../services";
import { tagsAction, postsAction } from "../../redux/actions";
import { TagData, PostData } from "../../lib/types";

export default class AppImpl implements App{
  reduxStore

  public constructor(){
    this.reduxStore = createStore(AppReducer)
  }

  async loadTags(){
    try{
      const tags = await backendService.tags()
      this.reduxStore.dispatch(tagsAction(tags))
    }catch(ex){
      throw ex
    }
  }

  getTags() : TagData[]{
    return this.reduxStore.getState().tags
  }

  async loadPosts(){
    const posts = await backendService.posts()
    this.reduxStore.dispatch(postsAction(posts))
  }

  getPosts() : PostData[]{
    return this.reduxStore.getState().posts
  }

  subscribe(listener : () => void){
    return this.reduxStore.subscribe(listener)
  }
}