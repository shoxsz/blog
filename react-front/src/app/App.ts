import { TagData } from "../lib/types";

export default interface App{
  loadTags() : void
  getTags() : TagData[]
  subscribe(listener : () => void)
}