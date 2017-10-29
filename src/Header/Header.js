import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div>
				<header className="header">
					<div className="container">
						<div className="logo-div">
							<a href="#" className="logo">Logo</a>
						</div>
						<nav className="menu">
							<ul className="menu__ul">
								<li className="menu__ul__item">
									<a href="#" className="menu__ul__item__link" href="#">Home</a>
								</li>
								<li className="menu__ul__item">
									<a href="#" className="menu__ul__item__link" href="#">About</a>
								</li>
								<li className="menu__ul__item">
									<a href="#" className="menu__ul__item__link" href="#">Contact</a>
								</li>
							</ul>
						</nav>
					</div>
				</header>
				<div className="header-div-support"></div>
			</div>
		)
	}
}

export default Header;