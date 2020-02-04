import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {

	return(
		<div className="item video__item" onClick={ () => onVideoSelect(video) } >
			<img src={video.snippet.thumbnails.medium.url} className="ui image video__item--image" alt={video.snippet.title}/>
			<div className="content">
				<div className="header">
				{ video.snippet.title }
				</div>
			</div> 
		</div>
	);
}

export default VideoItem;