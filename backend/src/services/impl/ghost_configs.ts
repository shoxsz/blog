export const GHOST_KEY = "cc47bfc7966609c347583c2211"
export const API_URL = "http://localhost:2368/ghost/api/v3/"

export const getGhostUrl = function(params : string, query?: any){
  let url = `${API_URL}${params}?key=${GHOST_KEY}`

  if(!!query){
    url += '&' + Object.keys(query).map(key => key + '=' + query[key]).join('&')
  }

  return url
}