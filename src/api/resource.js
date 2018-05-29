import API_ROOT from './config.js'

var zhihuApi = {
    news:'/4/news/latest',
    newsbydate: '/4/news/before/'   
}

const NewsResource = API_ROOT.concat(zhihuApi.news)
const NewsDateResource = API_ROOT.concat( zhihuApi.newsbydate )
export default {
    NewsResource,
    NewsDateResource
}

