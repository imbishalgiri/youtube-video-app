import React from 'react';
import Searchbar from './Searchbar';
import Youtube from '../apis/youtube';
import VideoList from './Videolist';
import VideoDetail from './VideoDetail';

class App extends React.Component {

	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit('html 5');
	}

	onTermSubmit = async (term) => {
		const response = await Youtube.get('/search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: 'AIzaSyB485XVbA2XE38xkPAXRkRN4LRSoV0DRw8',
				q: term
			}
		});
 		
 		this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
	}

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	}

	render(){
		return(
			<div className="ui container"> 
				<Searchbar onFormSubmit = { this.onTermSubmit } />	
				<div className="ui grid">
				 <div className="ui row">
				 	<div className="eleven wide column">
						<VideoDetail video={ this.state.selectedVideo } />
					</div>
					<div className="five wide column">
						<VideoList onVideoSelect={ this.onVideoSelect } videos={this.state.videos} />
					</div>
				</div>
				</div>
			</div> 
		);
	}
}

export default App;



/////////////////////////////////////
//// API KEY:  AIzaSyB485XVbA2XE38xkPAXRkRN4LRSoV0DRw8
