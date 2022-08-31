import React from "react";
import './recipes.css';

const Recipe = ({title, calories, image}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt={title + "image"} />
        </div>
    );
}

export default Recipe;