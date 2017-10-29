import React, { Component } from 'react';

class Main extends Component {

	render() {	
		const data = this.props.filterData;
		return (
			<div>
				<p>Information</p>
				{data.length !== 0 ? data.map((item) => 
					<div key={item.id}>
						<p>{item.name}</p>
						<p>{item.secondName}</p>
						<p>{item.age}</p>
					</div>
					)
					: "Not data"
				}
			</div>
		)
	}
}

export default Main;