import Ingredient from './Ingredient'
import Button from './components/Button.js'

const Ingredients = ({ ingredients, updateIngredients }) => {
	return (
		<>
			<Button id={2} color={'gray'} text={'2x'} onClick={updateIngredients} />
			{ingredients.map((ingredient) => (
				<Ingredient key={ingredient.id} ingredient={ingredient} />
			))}
		</>
	)
}

export default Ingredients