import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
	constructor(props) {
		super(props);
		this.onChangeInput = this.onChangeInput.bind(this);
		this.onChangeSelect = this.onChangeSelect.bind(this);
	}

	onChangeInput(event) {
		this.props.onChangeInput(event.target.value);
	}

	onChangeSelect(event) {
		this.props.onChangeSelect(event.target.value);
	}

	render() {		
		return (
			<div className="container">
				<div className="searchBar">
					<p className="searchBar__header">Search people</p>
					<div className="searchBar__inputDiv">
						<label className="searchBar__label" htmlFor="search-input">Name or surname</label>
						<input id="search-input" 
							   className="searchBar__inputDiv__input" 
							   value={this.props.searchQuery}
							   onChange={this.onChangeInput} 
							   type="text" placeholder="find" 
							   autoFocus="true"/>
					</div>
					<div className="searchBar__selectDiv">
						<label className="searchBar__label" htmlFor="search-select">Select gender</label>
						<select id="search-select"
								className="searchBar__selectDiv__select" 
								value={this.props.gender}
								onChange={this.onChangeSelect}>
							<option value="all">All</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>
				</div>
			</div>
		)
	}
}

export default Search;