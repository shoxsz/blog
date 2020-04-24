import { Tag, Post } from "./types";

export default interface PostService{
  tags() : Promise<Tag[]>
  posts(page : number, limit : number) : Promise<Post[]>
}