import React from 'react';

class Searchbar extends React.Component {
	state = { term: "" };

	onInputChange = event => {
		this.setState({ term: event.target.value })
	}

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onFormSubmit( this.state.term );
	}

	render() {
		return(
			<div className="search__bar ui segment">
			<form className="ui form" onSubmit={this.onFormSubmit}>
			  <div className="field">
			    <label>Search Here</label>
			    <input 
			    	type="text" 
			    	placeholder="search video" 
			    	value={ this.state.term }
			    	onChange={this.onInputChange} 
			    />
			  </div>
			</form>
			</div>
		);
	}
}

export default Searchbar;