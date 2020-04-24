import { AnyAction } from "redux";
import { TAGS } from "./consts";
import { TagData } from "../lib/types";

export const tagsAction = function(tags : TagData[]) : AnyAction{
  return {
    type: TAGS,
    tags
  }
}