import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import smallLogo from '../../images/smallLogo.png'


const RecipeDescription = () => {
    return (
        <div className="Recipe_Page">
            <div className="topBar">
                <img className='smallLogo' src={smallLogo} alt="CT logo"/>
                <h2>Recipe Name</h2>
                <FontAwesomeIcon icon={faArrowLeftLong} />
               
            </div>
            <div className="recipeName">Recipe Name</div>
            <div className="recipePhoto">Recipe Photo</div>
            <div className="overallTime">Recipe time</div>
            <div className="ingredientList">Recipe ingredients</div>
            <div className="instructions">Recipe instructions</div>


            <div className="ratings">Recipe ratings</div>
            <div className="reviews">Recipe reviews</div>

        </div>
        )

}
export default RecipeDescription;