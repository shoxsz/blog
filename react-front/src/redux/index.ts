import { createStore } from "redux";
import { TAGS, POSTS } from "./consts";
import { tagsReducer, postsReducer } from "./reducers";

const initialState = function(){
  return {
    tags: [],
    posts: []
  }
}

export default function AppReducer(state : any, action : any){
  if(typeof state === 'undefined'){
    return initialState()
  }

  switch(action.type){
    case TAGS:
      return tagsReducer(state, action)
    case POSTS:
      return postsReducer(state, action)
  }
}