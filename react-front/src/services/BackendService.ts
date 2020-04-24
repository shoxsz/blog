import { TagData } from "../lib/types";

export default interface BackendService{
  tags() : Promise<TagData[]>
}