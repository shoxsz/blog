import { Router, RequestHandlerFactory } from './router'
import { tags } from './controllers/tags'
import { posts } from './controllers/posts'

Router.get("/tags", RequestHandlerFactory(tags))
Router.get("/posts", RequestHandlerFactory(posts))

export {
  Router
}