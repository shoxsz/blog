import { Router, RequestHandlerFactory } from './router'
import { tags } from './controllers/tags'
import { posts, post } from './controllers/posts'

Router.get("/tags", RequestHandlerFactory(tags))
Router.get("/posts", RequestHandlerFactory(posts))
Router.get("/post", RequestHandlerFactory(post))

export {
  Router
}