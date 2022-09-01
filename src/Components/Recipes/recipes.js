import React from "react";
import "./recipes.css";

const Recipe = ({ title, calories, image }) => {
  const roundedCalories = Math.round(calories);

  return (
    <div className="recipes">
      <div className="box">
        <div className="text">
          <h1 className="title">{title}</h1>
          <p>{roundedCalories} kcal</p>
        </div>
        <img src={image} alt={title + "image"} />
      </div>
    </div>
  );
};

export default Recipe;
