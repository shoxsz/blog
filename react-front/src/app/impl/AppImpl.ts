import App from "../App";
import { createStore } from "redux";
import AppReducer from "../../redux";
import { backendService } from "../../services";
import { tagsAction } from "../../redux/actions";

export default class AppImpl implements App{
  reduxStore

  public constructor(){
    this.reduxStore = createStore(AppReducer)
  }

  async tags(){
    try{
      const tags = await backendService.tags()
      this.reduxStore.dispatch(tagsAction(tags))
    }catch(ex){
      throw ex
    }
  }

  subscribe(listener : () => void){
    return this.reduxStore.subscribe(listener)
  }
}