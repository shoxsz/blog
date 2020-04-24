import { createStore } from "redux";
import { TAGS } from "./consts";
import { tagsReducer } from "./reducers";

const initialState = function(){

}

export default function AppReducer(state : any, action : any){
  if(typeof state === 'undefined'){
    return initialState()
  }

  switch(action.type){
    case TAGS:
      return tagsReducer(state, action)
  }
}