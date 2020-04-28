import BackendService from "../BackendService"
import { TagData, PostData, PaginatedData } from "../../lib/types"
import axios from 'axios'
import { endpoint } from "./endpoint_config"

export default class BackendServiceImpl implements BackendService{
  async tags() : Promise<TagData[]>{
    const result = await axios.get(endpoint("tags"))
    return result.data
  }

  async posts(filter: string, page : number, limit : number) : Promise<PaginatedData<PostData>>{
    const result = await axios.get(endpoint("posts"), {
      params: {
        page,
        limit,
        filter
      }
    })
    
    return this.convertPaginatedPosts(result.data)
  }

  async loadPost(slug: string) : Promise<PostData>{
    const result = await axios.get(endpoint("post"), {
      params: {
        slug
      }
    })

    return this.convertPostDates(result.data)
  }

  private convertPaginatedPosts(paginatedPosts : PaginatedData<PostData>){
    paginatedPosts.dataArray = paginatedPosts.dataArray.map(post => this.convertPostDates(post))
    return paginatedPosts
  }

  private convertPostDates(post : PostData){
    post.createdAt = new Date(post.createdAt)
    post.updatedAt = new Date(post.updatedAt)
    return post
  }
}