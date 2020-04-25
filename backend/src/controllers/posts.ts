import { postService } from "../services"

export const posts = async function(request : any, response : any){
  const page = request.query.page || 1
  const limit = request.query.limit || 20
  const filter = request.query.filter || ''

  return await postService.posts(page, limit, filter)
}