import { postService } from "../services"

export const posts = async function(request : any, response : any){
  return await postService.posts(1, 2)
}