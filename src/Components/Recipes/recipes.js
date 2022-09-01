import React from "react";
import "./recipes.css";

const Recipe = ({ title, calories, image, cuisineType, url }) => {
  const roundedCalories = Math.round(calories);

  return (
    <div className="recipes">
      <a href={url} target="blank" >
        <div className="box">
          <div className="main-info">
            <h1 className="title">{title}</h1>
            <p>{roundedCalories} kcal</p>
          </div>
          <div className="cuisineType">
            <h3>{cuisineType}</h3>
          </div>
          <img src={image} alt={title + "image"} />
        </div>
      </a>
    </div>
  );
};

export default Recipe;
