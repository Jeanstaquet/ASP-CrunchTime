import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './RecipeDescription.css'
import { Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import smallLogo from '../../images/smallLogo.png'
import img1 from '../../assets/images/img1.jpeg'
import { faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'



const RecipeDescription = () => {
    return (
        <div className="Recipe_Page">
            <div className="topBar">
                <Navbar expand = "lg" variant="light" bg="light">
                    <img className='smallLogo' src={smallLogo} alt="CT logo"/>
                    <div className="recipeName" id='recipe-name'>Recipe Name</div>
                    <div className="recipeName" id='author-name'>Author Name</div>
             
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </Navbar>
            </div>
        
            <div className="recipePhoto">
                <img className='recipeImg' src={img1} alt="Pretty food"/>
            </div>
            <div className="Time">
                <div className ="PrepTime">Prep Time:</div>
                <div className ="CookTime">Cook Time:</div>
                <div className ="OverallTime">Overall Time:</div>
            </div>

            <div className="ingredientList">
                <div className='sectionTitle'>Here's what you'll need!</div>
                <div className='Ingredients'>
                    <ul>
                        <li>Cream cheese</li>
                        <li>Parmesan</li>
                    </ul>
                </div>
            </div>
            <div className="instructions">
            <div className='sectionTitle'>How to make it:</div>
                <ol>
                    <li>First you do a thing</li>
                    <li>Then you do another thing</li>
                    <li>And there's some other stuff after that</li>
                    <li>Thought you were done? lol no there's more but trust me it pays off </li>
                    <li>You're almost done, just do this last thing. Then salt to taste, plate it up real nice, take a photo for social media(obviously) and......NOW you can eat :) </li>
                </ol>
            </div>


            <div className="ratings">
                
                <div className="stars_Explore">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                </div>
            <div className="reviews">Recipe reviews</div>

        </div>
        )

}
export default RecipeDescription;