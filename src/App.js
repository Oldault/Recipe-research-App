import "./App.css";
import Header from "./Components/Header/header";
import React, { useEffect, useState } from "react";
import Recipe from "./Components/Recipes/recipes";
import Choose from "./Components/Choose/choose";

function App() {
  const APP_ID = "1b89f587";
  const APP_KEY = "3a91894c41c44e04ca4b408c7886719a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Header />
      <div className="under-header">
        <Choose />
        <div className="research-section">
          <form onSubmit={getSearch} className="search-form" >

            <input
              className="search-bar"
              type="text"
              placeholder="Search for Recipes and more..."
              value={search}
              onChange={updateSearch}
            />
            <button className="search-button" type="submit">
              Search
            </button>
          </form>
          <div className="results">
            {recipes.map((recipe, key) => (
              <Recipe
                key={key}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
