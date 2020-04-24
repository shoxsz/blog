import PostService from "./PostService";
import PostServiceImpl from "./impl/PostServiceImpl";

const postService : PostService = new PostServiceImpl()

export {
  postService
}