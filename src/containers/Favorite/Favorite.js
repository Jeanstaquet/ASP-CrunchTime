import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Navbar } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import smallLogo from '../../images/smallLogo.png'
import lightModeHeart from '../../images/lightModeHeart.png'
import img1 from '../../assets/images/img1.jpeg'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap'
import './Favorite.css'

//import * as Scroll from 'react-scroll';

const Favorites = () => {
    return (
        <div className="Favorite-Page">
            <div className="topBar">
                <Navbar className='navbar' expand="lg" variant="light" bg="light">
                    <img className='smallLogo' id='CTlogo' src={smallLogo} alt="CT logo" />
                    <div className="page-title" id='user-favorites'>Your Favorites</div>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </Navbar>
            </div>
            <Container className='content-body'>
                <Row className='layout-row'>
                    <Col className='layout-col'>
                        <Card className='recipe-card'>
                            <Navbar className='topBar' expand="lg" variant="light">
                                <img className='recipe-photo' src={img1} alt="picture of meal" />
                            </Navbar>
                            <Navbar className='topBar' expand="lg" variant="light">
                                <h5 className="page-title" id='user-favorites' D>A favorite</h5>
                                <img className='icon' src={lightModeHeart} alt="favorite icon" />
                            </Navbar>
                            <Container typeof='fluid' className='Favorite-List'>
                                <div className="ratings">
                                    <div className="stars">
                                        <FontAwesomeIcon id='total-star1' icon={faStar} />
                                        <FontAwesomeIcon id='total-star2' icon={faStar} />
                                        <FontAwesomeIcon id='total-star3' icon={faStar} />
                                        <FontAwesomeIcon id='total-star4' icon={faStar} />
                                        <FontAwesomeIcon id='total-star5' icon={faStar} />
                                    </div>
                                </div>
                            </Container>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='recipe-card'>
                            <Navbar className='topBar' expand="lg" variant="light">
                                <img className='recipe-photo' src={img1} alt="picture of meal" />
                            </Navbar>
                            <Navbar className='topBar' expand="lg" variant="light">
                                <h5 className="page-title" id='user-favorites' D>A favorite</h5>
                                <img className='icon' src={lightModeHeart} alt="favorite icon" />
                            </Navbar>
                            <Container typeof='fluid' className='Favorite-List'>
                                <div className="ratings">
                                    <div className="stars">
                                        <FontAwesomeIcon id='total-star1' icon={faStar} />
                                        <FontAwesomeIcon id='total-star2' icon={faStar} />
                                        <FontAwesomeIcon id='total-star3' icon={faStar} />
                                        <FontAwesomeIcon id='total-star4' icon={faStar} />
                                        <FontAwesomeIcon id='total-star5' icon={faStar} />
                                    </div>
                                </div>
                            </Container>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Card className='recipe-card'>
                        <Navbar className='topBar' expand="lg" variant="light">
                            <img className='recipe-photo' src={img1} alt="picture of meal" />
                        </Navbar>
                        <Navbar className='topBar' expand="lg" variant="light">
                            <h5 className="page-title" id='user-favorites' D>A favorite</h5>
                            <img className='icon' src={lightModeHeart} alt="favorite icon" />
                        </Navbar>
                        <Container typeof='fluid' className='Favorite-List'>
                            <div className="ratings">
                                <div className="stars">
                                    <FontAwesomeIcon id='total-star1' icon={faStar} />
                                    <FontAwesomeIcon id='total-star2' icon={faStar} />
                                    <FontAwesomeIcon id='total-star3' icon={faStar} />
                                    <FontAwesomeIcon id='total-star4' icon={faStar} />
                                    <FontAwesomeIcon id='total-star5' icon={faStar} />
                                </div>
                            </div>
                        </Container>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}
export default Favorites;