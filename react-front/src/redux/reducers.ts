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