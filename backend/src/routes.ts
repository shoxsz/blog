import { Router, RequestHandlerFactory } from './router'
import { tags } from './controllers/tags'

Router.get("/tags", RequestHandlerFactory(tags))

export {
  Router
}