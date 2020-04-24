import { TagData, PostData } from "../lib/types";

export default interface App{
  loadTags() : void
  getTags() : TagData[]

  loadPosts() : void
  getPosts() : PostData[]

  subscribe(listener : () => void)
}