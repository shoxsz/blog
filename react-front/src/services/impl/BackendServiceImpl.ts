import BackendService from "../BackendService"
import { TagData } from "../../lib/types"
import axios from 'axios'

export default class BackendServiceImpl implements BackendService{
  async tags() : Promise<TagData[]>{
    const result = await axios.get("http://localhost:3030/tags")
    return result.data
  }
}