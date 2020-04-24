import { postService } from "../services"

export const tags = async function(request : any, response : any){
  return await postService.tags()
}