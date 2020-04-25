export const tagsReducer = function(state : any, action : any){
  return {
    ...state,
    tags: action.tags
  }
}

export const postsReducer = function(state : any, action : any){
  return {
    ...state,
    paginatedPosts: action.paginatedPosts
  }
}

export const postsFilterReducer = function(state : any, action : any){
  return {
    ...state,
    postsFilter: action.postsFilter
  }
}