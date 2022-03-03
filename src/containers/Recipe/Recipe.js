import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Recipe.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import smallLogo from '../../images/smallLogo.png'
import img1 from '../../assets/images/img1.jpeg'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap'
//import * as Scroll from 'react-scroll';

const Recipe = () => {
    return (
        <div className="Recipe-Page">
            <div className="topBar">
                <Navbar expand="lg" variant="light" bg="light">
                    <img
                        className="smallLogo"
                        id="CTlogo"
                        src={smallLogo}
                        alt="CT logo"
                    />
                    <div className="recipeName" id="recipe-name">
                        Recipe Name
                    </div>
                    <div className="recipeName" id="author-name">
                        Author Name
                    </div>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </Navbar>
            </div>

            <div className="recipePhoto">
                <img className="recipeImg" src={img1} alt="Pretty food" />
            </div>
            <Container fluid="md" className="recipe-body">
                <div className="Time">
                    <div className="PrepTime">Prep Time:</div>
                    <div className="CookTime">Cook Time:</div>
                    <div className="OverallTime">Overall Time:</div>
                </div>

                <div className="ingredientList">
                    <div className="sectionTitle">Here's what you'll need!</div>
                    <div className="list">
                        <ul>
                            <li>Noodles</li>
                            <li>Spinach</li>
                            <li>Cherry tomatoes</li>
                            <li>Tofu</li>
                        </ul>
                    </div>
                </div>
                <div className="instructions">
                    <div className="sectionTitle">How to make it:</div>
                    <div className="list">
                        <ol>
                            <li>First you do a thing</li>
                            <li>Then you do another thing</li>
                            <li>And there's some other stuff after that</li>
                            <li>
                                Thought you were done? lol no there's more but
                                trust me it pays off{' '}
                            </li>
                            <li>
                                Do one last thing. Then salt to taste, plate it
                                up real nice, take a photo to prove you cooked
                                and......now you can eat :){' '}
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="ratings">
                    <div className="stars">
                        <FontAwesomeIcon id="total-star1" icon={faStar} />
                        <FontAwesomeIcon id="total-star2" icon={faStar} />
                        <FontAwesomeIcon id="total-star3" icon={faStar} />
                        <FontAwesomeIcon id="total-star4" icon={faStar} />
                        <FontAwesomeIcon id="total-star5" icon={faStar} />
                    </div>
                </div>

                <div className="review">
                    <Card className="review-card">
                        <Nav>
                            <div className="user">Someone's name</div>
                            <div className="user-rating">
                                <FontAwesomeIcon id="star1" icon={faStar} />
                                <FontAwesomeIcon id="star2" icon={faStar} />
                                <FontAwesomeIcon id="star3" icon={faStar} />
                                <FontAwesomeIcon id="star4" icon={faStar} />
                                <FontAwesomeIcon id="star5" icon={faStar} />
                            </div>
                        </Nav>

                        <div className="review-text">
                            <p>
                                Here's some reasons why this person liked or
                                disliked the recipe
                            </p>
                        </div>
                    </Card>
                </div>
            </Container>
        </div>
    )
}
export default Recipe
