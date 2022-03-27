import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Navbar } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
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
            <Navbar className='topBar' expand="lg" variant="light" bg="light">
                <img className='smallLogo' id='CTlogo' src={smallLogo} alt="CT logo" />
                <div className="page-title" id='user-favorites'>Your Favorites</div>
                <FontAwesomeIcon className='smallLogo' icon={faArrowLeftLong} />
            </Navbar>
            <Container className='content-body'>
                <Col className='layout-col'>
                    <FavoriteCard />
                    <FavoriteCard />
                    <FavoriteCard />
                    <FavoriteCard />
                </Col>
            </Container>
        </div>
    )
}
export default Favorites;