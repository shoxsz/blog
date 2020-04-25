import PostService from "../PostService";
import { Tag, Post, PaginatedData } from "../types";

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

  async posts(page : number, limit : number, filter : string) : Promise<PaginatedData<Post>>{
    const queryParams = this.buildQueryParams(page, limit, filter)

    const result = await axios.get(getGhostUrl("content/posts/", queryParams))

    const data = result.data
    const ghostPosts : GhostPost[] = data.posts

    const postsArray = ghostPosts.map((post : GhostPost) => {
      return this.ghostPostToPost(post)
    })

    return {
      dataArray: postsArray,
      itemsPerPage: data.meta.pagination.limit,
      page: data.meta.pagination.page,
      pageCount: data.meta.pagination.pages,
      total: data.meta.pagination.total
    }
  }

  private ghostPostToPost(post : GhostPost){
    return{
      title: post.title,
      createdAt: new Date(post.created_at),
      updatedAt: new Date(post.updated_at),
      excerpt: post.excerpt,
      html: post.html,
      image: post.feature_image,
      authors: post.authors.map(author => author.slug),
      tags: post.tags.map(tag => tag.name),
    }
  }

  private buildQueryParams(page : number, limit : number, filter : string){
    const queryParams : any = {
      include: 'authors,tags',
      page,
      limit
    }

    if(!!filter){
      queryParams.filter = this.buildPostFilter(filter)
    }

    return queryParams
  }

  private buildPostFilter(filter : string){
    const filterByPostTitle = `posts.title:'${filter}'`
    const filterByPostSlug = `posts.slug:'${filter}'`
    const filterByTagName = `tags.name:'${filter}'`
    const filterByTagSlug = `tags.slug:'${filter}'`

    return `${filterByPostTitle},${filterByPostSlug},${filterByTagName},${filterByTagSlug}`
  }
}