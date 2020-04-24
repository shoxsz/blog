import { postService } from "../services"

export const posts = async function(request : any, response : any){
  const page = request.query.page || 1
  const limit = request.query.limit || 20

  return await postService.posts(page, limit)
}