export const getEndPointURL = function(){
  if(process.env.NODE_ENV === "production"){
    return "http://crackthagamedev-com.umbler.net"
  }

  return "http://localhost:3000"
}

export const endpoint = function(params : string){
  return `${getEndPointURL()}/${params}`
}