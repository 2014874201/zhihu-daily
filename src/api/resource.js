import API_ROOT from './config.js'

var zhihuApi = {
    news:'/4/news/latest'
}

const NewsResource = API_ROOT.concat(zhihuApi.news)
export default NewsResource

