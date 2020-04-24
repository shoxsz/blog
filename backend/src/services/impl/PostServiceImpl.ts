import PostService from "../PostService";
import { Tag, Post } from "../types";

import axios from "axios";
import { GhostTag, GhostPost } from "./types";
import { getGhostUrl } from "./ghost_configs";

export default class PostServiceImpl implements PostService{
  async tags() : Promise<Tag[]>{
    const result = await axios.get(getGhostUrl("content/tags/"))
    
    const data = result.data

    const tag : GhostTag[] = data.tags
    return tag.map((tag : GhostTag) => {
      return {
        title: tag.name
      }
    })
  }

  async posts(page : number, limit : number) : Promise<Post[]>{
    const result = await axios.get(getGhostUrl("content/posts/", {
      include: 'authors,tags',
      page,
      limit
    }))

    const data = result.data

    const posts : GhostPost[] = data.posts
    return posts.map((post : GhostPost) => {
      return {
        title: post.title,
        createdAt: new Date(post.created_at),
        updatedAt: new Date(post.updated_at),
        excerpt: post.excerpt,
        html: post.html,
        image: post.feature_image,
        authors: post.authors.map(author => author.slug),
        tags: post.tags.map(tag => tag.name),
      }
    })
  }
}