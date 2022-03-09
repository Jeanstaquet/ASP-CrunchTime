const sun = require('./assets/images/sun.png');
const moon = require('./assets/images/moon.png');
const heart = require('./assets/images/heart.png');
const stick = require('./assets/images/stick.png');

const Footer = (props) => {
	const handleClick = (e) => {
		var colour;
		switch(props.bgc) {
			case 'white':
				colour = 'lightgrey';
				break;
			case 'lightgrey':
				colour = 'white';
		}
		return props.bgcFunc(colour);
	}

	return (
		<ul className="footer">
			{(props.bgc === 'lightgrey') ? (
				<li onClick={handleClick}><img className = "picture" src={sun}/></li>
			) : (
				<li onClick={handleClick}><img className = "picture" src={moon}/></li>
			)}
			<li><img className = "picture" src={heart}/></li>
			<li><img className = "picture" src={stick}/></li>
		</ul>
	)
}

export default Footer;