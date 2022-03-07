import {useState, useEffect} from 'react';
//import {Link} from 'react-router-dom';
const sun = require('./assets/images/sun.png');
const moon = require('./assets/images/moon.png');
const heart = require('./assets/images/heart.png');
const stick = require('./assets/images/stick.png');

const Footer = (props) => {
	const handleClick = (e) => {
		//console.log(props.bgc);
		var colour;
		switch(props.bgc) {
			case 'white':
				colour = 'lightgrey';
				break;
			case 'lightgrey':
				colour = 'white';
		}
		//const colour = (props.bgc === 'white') ? 'lightgrey' : 'white';
		//console.log(colour);
		return props.bgcFunc(colour);
	}

	// useEffect(() => {
	// 	const style = document.querySelector(".phone").style;
	// 	console.log(style);
	// })

	return (
		<ul className="footer">
			<li onClick={handleClick}><img className = "picture" src={sun}/></li>
			<li><img className = "picture" src={heart}/></li>
			<li><img className = "picture" src={stick}/></li>
		</ul>
	)
}

export default Footer;