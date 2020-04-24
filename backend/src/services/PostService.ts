import { Tag, Post } from "./types";

export default interface PostService{
  tags() : Promise<Tag[]>
  posts(offset : number, limit : number) : Promise<Post[]>
}