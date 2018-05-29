import axios from 'axios'
import Resource from './resource'


export default {
    getNews() {
        return axios.get(Resource.NewsResource)
    },
    getNewsByDate( date ) {
		return axios.get( Resource.NewsDateResource + date )
	}
}