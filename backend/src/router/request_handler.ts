export type ControllerFunction = (request : any, response : any) => any | Promise<any>

export const RequestHandlerFactory = function(controller : ControllerFunction){
  return async function(request: any, response: any, next: any){
    try{
      const controllerResponse = await controller(request, response)
      response.status(202).send(controllerResponse)
    }catch(ex){
      console.log(ex)
      response.status(500).send(ex)
    }
  }
}