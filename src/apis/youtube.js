import Axios from 'axios';

// const KEY = 'AIzaSyB485XVbA2XE38xkPAXRkRN4LRSoV0DRw8';

export default Axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3'
});