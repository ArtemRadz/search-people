import React, { Component } from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Search from './Search/Search';

import './App.css';

const INFO = [
	{
		id: 1,
		name: "Jack",
		secondName: "Smith",
		age: 31
	},
	{
		id: 2,
		name: "Harry",
		secondName: "Jones",
		age: 21
	},
	{
		id: 3,
		name: "William",
		secondName: "Thomas",
		age: 54
	},
	{
		id: 4,
		name: "Joshua",
		secondName: "Taylor",
		age: 67
	},
	{
		id: 5,
		name: "Daniel",
		secondName: "Evans",
		age: 13
	},
		{
		id: 6,
		name: "Olivia",
		secondName: "Miller",
		age: 31
	},
	{
		id: 7,
		name: "Emily",
		secondName: "Moore",
		age: 21
	},
	{
		id: 8,
		name: "Amelia",
		secondName: "Jones",
		age: 54
	},
	{
		id: 9,
		name: "Evie",
		secondName: "Taylor",
		age: 67
	},
	{
		id: 10,
		name: "Ava",
		secondName: "Wilson",
		age: 13
	}
];

class App extends Component {
	constructor(props) {
		super(props);
		this.onChangeInfo = this.onChangeInfo.bind(this);
		this.state = {
			info: INFO
		}
	}

	onChangeInfo(value) {
		const searchQuery = value.toLowerCase();

		const filterData = INFO.filter((item) => {
			const searchString = item.name.toLowerCase() + item.secondName.toLowerCase();

			return searchString.indexOf(searchQuery) !== -1;
		})

		this.setState({
			info:filterData
		})
	}

  	render() {
    	return (
      		<div>
        		<Header />
        		<Search onChangeInput={this.onChangeInfo}/>
        		<Main filterData={this.state.info}/>
        		<Footer />
     	 	</div>
    	);
  	}	
}

export default App;
