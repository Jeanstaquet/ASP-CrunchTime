import React, { useState, useEffect } from 'react';
//import { recipes } from './recipes';
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
import { BsArrowUpLeft } from "react-icons/bs";

const Searches = () => {
    const [recentSearches, setRecentSearches] = useState([]);
    const [lastViewed, setLastViewed] = useState([]);

    useEffect(() => {
        return recentSearches;
    }, [recentSearches]);

     useEffect(() => {
        return lastViewed;
    }, [lastViewed]);

    const handleClear = (e) => {
        for (var i = 0; i < e.path.length; i++) {
            var classes = e.path[i].classList;
            if (typeof classes != 'undefined') {
                if (classes.value == "searches-heading") {
                    setRecentSearches([]);
                }
                if (classes.value == "viewed-heading") {
                    setLastViewed([]);
                }
            }           
        }      
    }

    const viewRecipe = (e) => {
        const name = e.target.children[0].innerText;
        const timestamp = e.timeStamp;
        var new_arr = lastViewed;
        new_arr = findDuplicates(new_arr, name, timestamp);
        setLastViewed([...new_arr]);
    }

    const findDuplicates = (arr, name, timestamp) => {
        if (arr.filter(recipe => recipe.name === name).length > 0) {
            return arr;
        }
        else {
            var new_arr = arr;
            new_arr.push({"name": name, "timestamp": timestamp});
            return new_arr;
        }
    }

    return (
        <React.Fragment>
            <SearchBar showRecentSearches={recentSearches => setRecentSearches(prevArr => [...prevArr, recentSearches])} />
            <div className="searches-heading">
                <h3>Recent searches</h3>
                <button onClick={() => handleClear(event)} className="clear-btn"><span>Clear</span></button>
            </div>
            <ul>
                {recentSearches.map((search) => 
                    
                    <li key={search}>
                        <div onClick={() => viewRecipe(event)} className="recent-search-container">
                            <p className="recent-search">{search}</p>
                            <svg width="0" height="0">
                                <linearGradient id="blue-gradient-light" x1="100%" y1="100%" x2="0%" y2="0%">
                                    <stop stopColor="rgba(27,191,210,0.9672911400888481)" offset="1%" />
                                    <stop stopColor="rgba(0,224,255,1)" offset="69%" />
                                </linearGradient>
                            </svg>
                            <BsArrowUpLeft style={{ fill: "url(#blue-gradient-light)" }} />    
                        </div>                                           
                    </li>
                    
                )}
            </ul>
            <div className="viewed-heading">
                <h3>Last viewed</h3>
                <button onClick={() => handleClear(event)} className="clear-btn"><span>Clear</span></button>
            </div>
            <div className="row">
            {lastViewed.map((recipe) =>
                <div className="col-sm">
                    <RecipeCard key={recipe.name} name={recipe.name} img_src={require('../../assets/images/img1.jpeg')} />
                </div>
            )}
            </div>
            
        </React.Fragment>
    )
}

export default Searches;

