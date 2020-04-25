import { TagData, PostData, PaginatedData } from "../lib/types";

export default interface App{
  loadTags() : void
  getTags() : TagData[]

  setPostsFilter(filter : string) : void
  getPostsFilter() : string
  loadPosts(page: number, limit: number) : void
  getPosts() : PaginatedData<PostData>

  subscribe(listener : () => void)
}