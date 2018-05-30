import axios from 'axios'
import Resource from './resource'
export default {
	getNews() {
		return axios.get( Resource.NewsResource )
	},
	getNewsById( id ) {
		return axios.get( Resource.NewsIdResource + id )
	},
	getNewsByDate( date ) {
		return axios.get( Resource.NewsDateResource + date )
	},
	getNewsInfoById( id ) {
		return axios.get( Resource.NewsInfoResource, {
			params: {
				id: id
			}
		} )
	},
	getTopics() {
		return axios.get( Resource.TopicsResource )
	},
	getTopicsById( topicid ) {
		return axios.get( Resource.TopicsIdResource + topicid )
	},
	getSections() {
		return axios.get( Resource.SectionsResource )
	},
	getSectionsById( sectionid ) {
		return axios.get( Resource.SectionIdResource, {
			params: {
				sectionid: sectionid
			}
		} )
	},
}
