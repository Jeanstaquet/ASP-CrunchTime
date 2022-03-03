import React from 'react'
// import Button from './components/Button.js'

const Title = ({ title, onUpdate }) => {
	return (
		<div>
			<h1>{title}</h1>
		</div>
	)
}

Title.defaultProps = {
	title: 'Recipe Title'
}

export default Title