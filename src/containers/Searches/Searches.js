import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RecipeCard from './RecipeCard'
import smallLogo from '../../images/smallLogo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Search.css'

const Searches = () => {
    const [data, setData] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/recipies').then((resp) => {
            const { data } = resp
            setData(data)
        })
    }, [])

    return (
        <React.Fragment>
            <div className="search-bar-container">
                <img className="logo-small" src={smallLogo} />
                <input
                    className="search-bar"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>

            <div className="searches-heading">
                <h3>Recent searches</h3>
                <button className="clear-btn">
                    <span>Clear</span>
                </button>
            </div>
            {data.length &&
                data
                    .filter((r) => r.name.includes(input))
                    .map((elem, idx) => (
                        <RecipeCard
                            name={elem.name}
                            imgURL={elem.imgURL}
                            key={idx}
                        />
                    ))}
        </React.Fragment>
    )
}

export default Searches
