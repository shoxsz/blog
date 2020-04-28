export const getEndPointURL = function(){
  if(process.env.NODE_ENV === "production"){
    return "http://159.203.88.127/backend"
  }

  return "http://localhost:3000"
}

export const endpoint = function(params : string){
  return `${getEndPointURL()}/${params}`
}