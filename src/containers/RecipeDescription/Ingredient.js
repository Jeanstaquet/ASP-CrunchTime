const Ingredient = ({ ingredient }) => {
	return (
		<div className='ingredient'>
			<h5>{ingredient.amount} {ingredient.unit} {ingredient.item}</h5>
		</div>
	)
}

export default Ingredient

// {ingredient.amount} {ingredient.unit} {ingredient.item}