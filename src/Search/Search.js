import React, { Component } from 'react';

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
			<div>
				<label>Search
					<input onChange={this.onChangeInput} type="text" placeholder="search"/>
				</label>
			</div>
		)
	}
}

export default Search;