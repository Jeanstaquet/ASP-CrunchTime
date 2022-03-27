import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import lightModeHeart from '../../images/lightModeHeart.png'
import img1 from '../../assets/images/img1.jpeg'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap'
import './Favorite.css'


export const FavoriteCard = () => {
    return (
        <Card className='recipe-card'>
            <Navbar className='topBar' expand="lg" variant="light">
                <img className='recipe-photo' src={img1} alt="picture of meal" />
            </Navbar>
            <Container className='topBar'>
                <h5 className="page-title" id='user-favorites' D>A favorite</h5>
                <img className='icon' src={lightModeHeart} alt="favorite icon" />
            </Container>

            <Container typeof='fluid' className='Favorite-List, topBar'>
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
    )
}
