import { TagData, PostData, PaginatedData } from "../lib/types";

export default interface BackendService{
  tags() : Promise<TagData[]>
  posts(filter: string, page : number, limit : number) : Promise<PaginatedData<PostData>>
}