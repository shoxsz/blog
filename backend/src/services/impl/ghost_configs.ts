export const API_URL = "http://localhost:2368/ghost/api/v3/"

const getGhostKey = function(){
  if(process.env.NODE_ENV === "production"){
    return "cc47bfc7966609c347583c2211"
  }

  return "d0ee566657aea8c9285df2dfc5"
}

export const getGhostUrl = function(params : string, query?: any){
  let url = `${API_URL}${params}?key=${getGhostKey()}`

  if(!!query){
    url += '&' + Object.keys(query).map(key => key + '=' + query[key]).join('&')
  }

  return url
}