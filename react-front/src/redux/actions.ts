import { AnyAction } from "redux";
import { TAGS, POSTS } from "./consts";
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