const LOCAL_ADDRESS = "http://localhost:3030"
const SERVER_ADDRESS = "https://crackthagamedev.com/backend"

export const getEndPointURL = function(){
  if(process.env.NODE_ENV === "production"){
    return SERVER_ADDRESS
  }

  return LOCAL_ADDRESS
}

export const endpoint = function(params : string){
  return `${getEndPointURL()}/${params}`
}