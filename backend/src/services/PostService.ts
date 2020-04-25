import { Tag, Post, PaginatedData } from "./types";

export default interface PostService{
  tags() : Promise<Tag[]>
  posts(page : number, limit : number, filter : string) : Promise<PaginatedData<Post>>
}