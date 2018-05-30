import API_ROOT from './config.js'

var zhihuApi = {
    news:'/4/news/latest',
    newsbydate: '/4/news/before/',
	newsbyid: '/4/news/',
	newsinfo: '/4/story-extra',
	topics: '/4/themes',
	topicbyid: '/4/theme/',
	sections: '/3/sections',
	sectionbyid: '/3/section',
}

const NewsResource = API_ROOT.concat(zhihuApi.news)
const NewsDateResource = API_ROOT.concat( zhihuApi.newsbydate )
const NewsIdResource = API_ROOT.concat( zhihuApi.newsbyid )
const NewsInfoResource = API_ROOT.concat( zhihuApi.newsinfo )
const TopicsResource = API_ROOT.concat( zhihuApi.topics )
const TopicsIdResource = API_ROOT.concat( zhihuApi.topicbyid )
const SectionsResource = API_ROOT.concat( zhihuApi.sections )
const SectionIdResource = API_ROOT.concat( zhihuApi.sectionbyid )
export default {
    NewsResource,
    NewsDateResource,
    NewsIdResource,
    NewsInfoResource,
    TopicsResource,
    TopicsIdResource,
    SectionsResource,
    SectionIdResource
}

