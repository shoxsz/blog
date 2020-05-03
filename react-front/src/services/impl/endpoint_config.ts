const LOCAL_ADDRESS = "http://192.168.2.103:3030"
const SERVER_ADDRESS = "http://159.203.88.127/backend"

export const getEndPointURL = function(){
  if(process.env.NODE_ENV === "production"){
    return SERVER_ADDRESS
  }

  return LOCAL_ADDRESS
}

export const endpoint = function(params : string){
  return `${getEndPointURL()}/${params}`
}