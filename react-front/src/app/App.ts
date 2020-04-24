import { TagData } from "../lib/types";

export default interface App{
  tags() : void
  subscribe(listener : () => void)
}