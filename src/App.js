import React, { Component } from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Search from './Search/Search';

const INFO = [
	{
		id: 1,
		name: "Jack",
		secondName: "Smith",
		age: 31,
		photo: 'https://s-media-cache-ak0.pinimg.com/originals/ff/92/e6/ff92e603b9bc319699262fd675f9987c.jpg',
		country: "Austria",
		sex: "male"
	},
	{
		id: 2,
		name: "Harry",
		secondName: "Jones",
		age: 21,
		photo: 'https://i.pinimg.com/736x/4f/5a/ab/4f5aab3d63508b2407ebbe3d72065c42--sad-faces-black-white-photography.jpg',
		country: "Belgium",
		sex: "male"
	},
	{
		id: 3,
		name: "William",
		secondName: "Thomas",
		age: 54,
		photo: 'https://i.pinimg.com/736x/1b/eb/2d/1beb2d92e09cf5fa93c38966a199c206--dieter-men-portrait.jpg',
		country: "Bulgaria",
		sex: "male"
	},
	{
		id: 4,
		name: "Joshua",
		secondName: "Taylor",
		age: 67,
		photo: 'https://i.pinimg.com/736x/5f/1e/b9/5f1eb9e7df762aca5c23a5e34e1ce942--indian-photography-amazing-photography.jpg',
		country: "Czechia",
		sex: "male"
	},
	{
		id: 5,
		name: "Daniel",
		secondName: "Evans",
		age: 13,
		photo: 'https://s-media-cache-ak0.pinimg.com/originals/9d/b3/05/9db305b3251e303b8467837b76b6a361.jpg',
		country: "USA",
		sex: "male"
	},
		{
		id: 6,
		name: "Olivia",
		secondName: "Miller",
		age: 25,
		photo: 'https://i.pinimg.com/736x/b4/9a/4d/b49a4d85edaf521654e3a94c4a705248--faces-beauty.jpg',
		country: "France",
		sex: "female"
	},
	{
		id: 7,
		name: "Emily",
		secondName: "Moore",
		age: 31,
		photo: 'https://i.pinimg.com/736x/06/10/7e/06107eaff63aaca0e44e6592e222d287--beautiful-dream-beautiful-people.jpg',
		country: "Germany",
		sex: "female"
	},
	{
		id: 8,
		name: "Amelia",
		secondName: "Jones",
		age: 69,
		photo: 'https://i.pinimg.com/736x/cc/4f/6b/cc4f6baffc6166beba980cbb86eb1282--beautiful-smile-beautiful-women.jpg',
		country: "USA",
		sex: "female"
	},
	{
		id: 9,
		name: "Evie",
		secondName: "Taylor",
		age: 12,
		photo: 'https://i.pinimg.com/736x/3e/54/cc/3e54cc9c45c0f62d8de9d68224626817--girl-face-woman-face.jpg',
		country: "Italy",
		sex: "female"
	},
	{
		id: 10,
		name: "Ava",
		secondName: "Wilson",
		age: 44,
		photo: 'http://i.dailymail.co.uk/i/pix/2015/05/21/18/28F1429A00000578-3091126-Alicia_s_neutral_face_was_guessed_at_41_years_old_which_is_her_a-a-5_1432229758662.jpg',
		country: "Luxembourg",
		sex: "female"
	}
];

class App extends Component {
	constructor(props) {
		super(props);
		this.onChangeInfo = this.onChangeInfo.bind(this);
		this.onChangeSelect = this.onChangeSelect.bind(this);
		this.onChangeQuery = this.onChangeQuery.bind(this);
		this.state = {
			info: INFO,
			genderValue: "all",
			searchQuery: ""
		}
	}

	onChangeQuery(select, input) {
		let filterData = INFO;
		filterData = INFO.filter((item) => {
			const searchString = item.name.toLowerCase() + item.secondName.toLowerCase();
			if(searchString.indexOf(input.toLowerCase()) !== -1 && (select === item.sex || select === "all")) {
				return true;
			}
		})
		
		this.setState({
			info: filterData
		})
	}

	onChangeInfo(value) {
		this.onChangeQuery(this.state.genderValue, value);

		this.setState({
			searchQuery: value
		})
	}

	onChangeSelect(value) {
		this.onChangeQuery(value, this.state.searchQuery);

		this.setState({
			genderValue: value
		})
	}

  	render() {
    	return (
      		<div className="content">
        		<Header />
        		<Search onChangeInput={this.onChangeInfo} 
        				onChangeSelect={this.onChangeSelect} 
        				gender={this.state.genderValue} 
        				searchQuery={this.state.searchQuery}/>
        		<Main filterData={this.state.info}/>
        		<Footer />
     	 	</div>
    	);
  	}	
}

export default App;
