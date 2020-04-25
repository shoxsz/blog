import { AnyAction } from "redux";
import { TAGS, POSTS, POSTS_FILTER, POST } from "./consts";
import { TagData, PostData, PaginatedData } from "../lib/types";

export const tagsAction = function(tags : TagData[]) : AnyAction{
  return {
    type: TAGS,
    tags
  }
}

export const postsAction = function(posts : PaginatedData<PostData>) : AnyAction{
  return {
    type: POSTS,
    paginatedPosts: posts
  }
}

export const postAction = function(post : PostData) : AnyAction{
  return {
    type: POST,
    post
  }
}

export const postsFilterAction = function(postsFilter : string) : AnyAction{
  return {
    type: POSTS_FILTER,
    postsFilter
  }
}