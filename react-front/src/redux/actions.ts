import { AnyAction } from "redux";
import { TAGS, POSTS } from "./consts";
import { TagData, PostData } from "../lib/types";

export const tagsAction = function(tags : TagData[]) : AnyAction{
  return {
    type: TAGS,
    tags
  }
}

export const postsAction = function(posts : PostData[]) : AnyAction{
  return {
    type: POSTS,
    posts
  }
}