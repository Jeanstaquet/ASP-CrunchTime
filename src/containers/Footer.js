import React from 'react'
import { Link, useHistory } from 'react-router-dom'
const heart = require('../images/lightModeHeart.png')
const user = require('../images/User.png')
import { AiFillCaretLeft } from 'react-icons/ai'

const Footer = () => {
    const history = useHistory()

    return (
        <ul className="footer">
            <li>
                <AiFillCaretLeft onClick={() => history.goBack()} />
            </li>
            <li>
                <Link to="/Favorite">
                    <img className="picture" src={heart} />
                </Link>
            </li>
            <li>
                <Link to="/">
                    <img className="picture" src={user} />
                </Link>
            </li>
        </ul>
    )
}

export default Footer
