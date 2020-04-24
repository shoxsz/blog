import { TagData, PostData } from "../lib/types";

export default interface App{
  loadTags() : void
  getTags() : TagData[]

  loadPosts(page: number, limit: number) : void
  getPosts() : PostData[]

  subscribe(listener : () => void)
}