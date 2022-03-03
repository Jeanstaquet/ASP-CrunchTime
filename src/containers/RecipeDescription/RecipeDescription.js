import React, { Component, useState } from 'react';
import CTLogo from '../../assets/CTLogo';

class RecipeDescription extends Component {
	state = {
		title: 'Basic Spaghetti',
		image_src: require('../../assets/images/img1.jpeg'),
		ingredients: [
			{
				id: 1,
				amount: 1,
				unit: 'tbsp',
				item: 'olive oil'
			},
			{
				id: 2,
				amount: 1,
				unit: 0,
				item: 'yellow onion, diced'
			},
			{
				id: 3,
				amount: 32,
				unit: 'oz',
				item: 'pasta sauce'
			},
			{
				id: 4,
				amount: 1,
				unit: 'lb',
				item: 'spaghetti'
			}
		],
		instructions: [
			{
				id: 1,
				text: "In large pot, bring 6 cups of water to a boil"
			},
			{
				id: 2,
				text: "Cook pasta according to package instructions, then drain."
			},
			{
				id: 3,
				text: "In medium saucepan heat oil over medium heat"
			},
			{
				id: 4,
				text: "When oil is heated, add onion. Saute until lightly browned."
			},
			{
				id: 5,
				text: "Add sauce to browned onion and heat through. Turn heat down to medium-low and simmer for 5 minutes."
			},
			{
				id: 6,
				text: "Transfer sauce and pasta back to pot and toss."
			},
			{
				id: 7,
				text: "Add favorite grated cheese if desired."
			}
		]
	};

	styles = {
		listStyleType: "none"
	};

	// constructor() {
	// 	super();
	// 	this.handleRatios = this.handleRatios.bind(this);
	// }

	handleRatios = (e) => {
		var num = e.target.innerHTML.split('')[0];
		this.updateIngredients(num);
	}

	render() {
		return (
			<div style={this.styles}>
				<div className="heading-container">
					<CTLogo />
					<h1 className="heading">{this.state.title}</h1>
				</div>
				<img className="recipe_desc_img" src={this.state.image_src} />
				<h3 className="heading">Ingredients</h3>
				<div className="ratio-buttons">
					<button onClick={this.handleRatios}>1x</button>
					<button onClick={this.handleRatios}>2x</button>
					<button onClick={this.handleRatios}>3x</button>
				</div>
				<ul>
					{this.state.ingredients.map(ingredient => <li style={this.styles} key={ingredient.id}>{ingredient.amount}{this.formatIngredients(ingredient.unit, "unit")}{this.formatIngredients(ingredient.item, "item")}</li>)}
				</ul>
				<h3 className="heading">Preparation</h3>
				<ol>
					{this.state.instructions.map(instruction => <li key={instruction.id}>{instruction.text}</li>)}
				</ol>	
			</div>
		);
	}

	formatIngredients(v, k) {
		var str;
		switch(k) {
			case "unit":
				str = (v === 0) ? "" : (" " + v)
				break;
			case "item":
				str = " " + v
				break;
		}
		return str;
	}

	updateIngredients(amt) {
		this.setState((state) => ({
			ingredients: state.ingredients.map(ingredient => {
				var res = ingredient.amount * amt;
				return { ...ingredient, amount: res };
			})
		}))
	}
}

export default RecipeDescription;
