import { createStore } from "redux";
import { TAGS, POSTS, POSTS_FILTER } from "./consts";
import { tagsReducer, postsReducer, postsFilterReducer } from "./reducers";

const initialState = function(){
  return {
    tags: [],
    postsFilter: '',
    paginatedPosts: {
      dataArray: [],
      page: 1,
      itemsPerPage: 20,
      pageCount: 1,
      total: 0
    }
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
    case POSTS_FILTER:
      return postsFilterReducer(state, action)
  }
}