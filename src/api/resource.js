import API_ROOT from './config.js'

var zhihuApi = {
    news:'/4/news/latest'
}

export const NewsResource = API_ROOT.concat(zhihuApi.news)
