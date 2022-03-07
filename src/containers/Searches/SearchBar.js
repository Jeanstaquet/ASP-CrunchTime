import React, { useState, useEffect } from 'react';
import CTLogo from './CTLogo';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [recentSearches, setRecentSearches] = useState([]);

    const handleKeyUp = (event) => {
        if (event.key == "Enter") {
            //setRecentSearches(prevArr => [...prevArr, event.target.value]);
            props.showRecentSearches(event.target.value);
            setSearchTerm("");
        }
    }

    useEffect(() => {
        return recentSearches;
    }, [recentSearches, searchTerm]);

    return (
        <div className="search-bar-container">            
            <CTLogo />            
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

export default SearchBar
