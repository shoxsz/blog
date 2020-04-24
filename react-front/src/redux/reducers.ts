export const tagsReducer = function(state : any, action : any){
  return {
    ...state,
    tags: action.tags
  }
}