import { Tag } from "./types";

export default interface PostService{
  tags() : Promise<Tag[]>
}