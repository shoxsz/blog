import BackendService from "./BackendService";
import BackendServiceImpl from "./impl/BackendServiceImpl";

const backendService : BackendService = new BackendServiceImpl()

export {
  backendService
}