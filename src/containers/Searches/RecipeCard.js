import React from 'react';

const RecipeCard = (props) => {
    return (
        <div className="recipe-card">
            <img src={props.img_src} alt="Avatar" />
            <div className="card-container">
                <h4><b>{props.name}</b></h4>
            </div>
        </div>
    )
}

export default RecipeCard;