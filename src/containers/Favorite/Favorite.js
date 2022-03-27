import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Navbar } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import smallLogo from '../../images/smallLogo.png'
// import lightModeHeart from '../../images/lightModeHeart.png'
// import img1 from '../../assets/images/img1.jpeg'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { Card } from 'react-bootstrap'
import { FavoriteCard } from './FavoriteCard.js'
import './Favorite.css'

//import * as Scroll from 'react-scroll';

const Favorites = () => {
    return (
        <div className="Favorite-Page">
            <div className="topBar">
                <Navbar expand="lg" variant="light" bg="light">
                    <img className='smallLogo' id='CTlogo' src={smallLogo} alt="CT logo" />
                    <div className="page-title" id='user-favorites'>Your Favorites</div>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </Navbar>
            </div>
            <Container className='content-body'>
                <Row className='layout-row'>
                    <Col className='layout-col'>
                        <FavoriteCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Favorites;