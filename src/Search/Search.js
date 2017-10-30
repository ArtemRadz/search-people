import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
	constructor(props) {
		super(props);
		this.onChangeInput = this.onChangeInput.bind(this);
	}

	onChangeInput(event) {
		this.props.onChangeInput(event.target.value);
	}

	render() {		
		return (
			<div className="container">
				<div className="searchBar">
					<label className="search__label" htmlFor="search-input">Search people</label>
					<input id="search-input" className="search__input" onChange={this.onChangeInput} type="text" placeholder="find"/>
				</div>
			</div>
		)
	}
}

export default Search;