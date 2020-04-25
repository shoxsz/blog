import BackendService from "../BackendService"
import { TagData, PostData, PaginatedData } from "../../lib/types"
import axios from 'axios'

export default class BackendServiceImpl implements BackendService{
  async tags() : Promise<TagData[]>{
    const result = await axios.get("http://localhost:3030/tags")
    return result.data
  }

  async posts(page : number, limit : number) : Promise<PaginatedData<PostData>>{
    const result = await axios.get("http://localhost:3030/posts", {
      params: {
        page,
        limit
      }
    })
    return result.data
  }
}