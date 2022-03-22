import React, { useState, useEffect } from 'react';
import smallLogo from '../../images/smallLogo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Search.css';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [recentSearches] = useState([]);

    const handleKeyUp = (event) => {
        if (event.key == "Enter") {
            props.showRecentSearches(event.target.value);
            setSearchTerm("");
        }
    }

    useEffect(() => {
        return recentSearches;
    }, [recentSearches, searchTerm]);

    return (
        <div className="search-bar-container">
            <img className="logo-small" src={smallLogo} />
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                    onKeyUp={() => handleKeyUp(event)}
                    value={searchTerm}
                />
            </div>
        </div>
    )
}

export default SearchBar;
