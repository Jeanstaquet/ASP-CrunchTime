import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Navbar } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import lightModeHeart from '../../images/lightModeHeart.png'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap'
import smallLogo from '../../images/smallLogo.png'
import './Favorite.css'

const Favorites = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        try {
            axios.get('http://localhost:3001/recipies').then((resp) => {
                const { data } = resp
                setData(data)
            })
        } catch (e) {
            setData()
        }
    }, [])

    return (
        <div className="Favorite-Page">
            <div className="topBar">
                <Navbar
                    className="topBar"
                    expand="lg"
                    variant="light"
                    bg="light"
                >
                    <img
                        className="smallLogo"
                        id="CTlogo"
                        src={smallLogo}
                        alt="CT logo"
                    />
                    <div className="page-title" id="user-favorites">
                        Your Favorites
                    </div>
                    <FontAwesomeIcon
                        className="smallLogo"
                        icon={faArrowLeftLong}
                    />
                </Navbar>
            </div>

            <Container className="content-body">
                <Row className="layout-row">
                    <Col className="layout-col">
                        <Card className="recipe-card">
                            <Navbar
                                className="topBar"
                                expand="lg"
                                variant="light"
                            >
                                <img
                                    className="recipe-photo"
                                    src={data.length && data[5].imgURL}
                                    alt="picture of meal"
                                />
                                <h5 className="page-title" id="user-favorites">
                                    {data.length && data[5].type}
                                </h5>
                                <img
                                    className="icon"
                                    src={lightModeHeart}
                                    alt="favorite icon"
                                />
                            </Navbar>

                            <Container typeof="fluid" className="Favorite-List">
                                <div className="ratings">
                                    <div className="stars">
                                        <FontAwesomeIcon
                                            id="total-star1"
                                            icon={faStar}
                                        />
                                        <FontAwesomeIcon
                                            id="total-star2"
                                            icon={faStar}
                                        />
                                        <FontAwesomeIcon
                                            id="total-star3"
                                            icon={faStar}
                                        />
                                        <FontAwesomeIcon
                                            id="total-star4"
                                            icon={faStar}
                                        />
                                        <FontAwesomeIcon
                                            id="total-star5"
                                            icon={faStar}
                                        />
                                    </div>
                                </div>
                            </Container>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="recipe-card">
                            <Navbar
                                className="topBar"
                                expand="lg"
                                variant="light"
                            >
                                <img
                                    className="recipe-photo"
                                    src={data.length && data[4].imgURL}
                                    alt="food from the recipe"
                                />
                                <h5 className="page-title" id="user-favorites">
                                    {data.length && data[4].name}
                                </h5>
                                <img
                                    className="icon"
                                    src={lightModeHeart}
                                    alt="favorite icon"
                                />
                            </Navbar>

                            <Container typeof="fluid" className="Favorite-List">
                                <div className="ratings">
                                    <div className="stars">
                                        <FontAwesomeIcon
                                            id="total-star1"
                                            icon={faStar}
                                        />
                                        <FontAwesomeIcon
                                            id="total-star2"
                                            icon={faStar}
                                        />
                                        <FontAwesomeIcon
                                            id="total-star3"
                                            icon={faStar}
                                        />
                                        <FontAwesomeIcon
                                            id="total-star4"
                                            icon={faStar}
                                        />
                                        <FontAwesomeIcon
                                            id="total-star5"
                                            icon={faStar}
                                        />
                                    </div>
                                </div>
                            </Container>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Card className="recipe-card">
                        <Navbar className="topBar" expand="lg" variant="light">
                            <img
                                className="recipe-photo"
                                src={data.length && data[3].imgURL}
                                alt="picture of meal"
                            />
                            <h5 className="page-title" id="user-favorites" D>
                                {data.length && data[3].name}
                            </h5>
                            <img
                                className="icon"
                                src={lightModeHeart}
                                alt="favorite icon"
                            />
                        </Navbar>

                        <Container typeof="fluid" className="Favorite-List">
                            <div className="ratings">
                                <div className="stars">
                                    <FontAwesomeIcon
                                        id="total-star1"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        id="total-star2"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        id="total-star3"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        id="total-star4"
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        id="total-star5"
                                        icon={faStar}
                                    />
                                </div>
                            </div>
                        </Container>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}
export default Favorites
