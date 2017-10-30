import React, { Component } from 'react';
import './Main.css';

class Main extends Component {

	render() {	
		const data = this.props.filterData;
		return (
			<section className="main">
				<div className="main__inner">
					<div>
						{data.length !== 0 ? data.map((item) =>
							<div key={item.id} className="main__inner__item"> 
								<div className="main__inner__item__div" >
									<div style={{backgroundImage: 'url(' + item.photo + ')'}} className="main__inner__item__div__img"></div>
								</div>
								<p className="main__inner__item__name"><strong>Name: </strong>{item.name}</p>
								<p className="main__inner__item__secondName"><strong>Surname: </strong>{item.secondName}</p>
								<p className="main__inner__item__age"><strong>Age: </strong>{item.age}</p>
								<p className="main__inner__item__age"><strong>Country: </strong>{item.country}</p>
							</div>
							)
							: <div className="no-matches">
								<p>No matches</p>
								<p>Try another else</p>
							  </div>
						}
					</div>
				</div>
			</section>
		)
	}
}

export default Main;