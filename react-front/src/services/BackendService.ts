import { TagData, PostData } from "../lib/types";

export default interface BackendService{
  tags() : Promise<TagData[]>
  posts() : Promise<PostData[]>
}