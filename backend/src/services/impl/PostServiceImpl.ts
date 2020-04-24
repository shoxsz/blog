import PostService from "../PostService";
import { Tag } from "../types";

import axios from "axios";
import { GhostTag } from "./types";

export default class PostServiceImpl implements PostService{
  async tags() : Promise<Tag[]>{
    const result = await axios.get("http://localhost:2368/ghost/api/v3/content/tags/?key=d0ee566657aea8c9285df2dfc5")
    
    const data = result.data

    const tag : GhostTag[] = data.tags
    return tag.map((tag : GhostTag) => {
      return {
        title: tag.name
      }
    })
  }
}