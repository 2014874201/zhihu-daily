var config = {
  site: 'zhihu-agent.herokuapp.com',
  method:'/get?api='
}
const API_ROOT = 'https://'.concat( config.site, config.method)
export  default API_ROOT 
