import { Tag, Post, PaginatedData } from "./types";

export default interface PostService{
  tags() : Promise<Tag[]>
  posts(page : number, limit : number) : Promise<PaginatedData<Post>>
}