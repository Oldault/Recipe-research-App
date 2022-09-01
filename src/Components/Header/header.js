import React from "react";
import "./header.css";
import Cooking from "./Cooking.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div class="nav-left">
          <div class="logo">
            <a href="https://en.wikipedia.org/wiki/Eyes_of_Buddha">
              <h1>Cookeasy</h1>
            </a>
          </div>
          <div class="navigation">
            <ol>
              <a href="https://en.wikipedia.org/wiki/Eyes_of_Buddha">
                <li>Shop</li>
              </a>
              <a href="https://en.wikipedia.org/wiki/Eyes_of_Buddha">
                <li>Features</li>
              </a>
              <a href="https://en.wikipedia.org/wiki/Eyes_of_Buddha">
                <li>Recipes</li>
              </a>
              <a href="https://en.wikipedia.org/wiki/Eyes_of_Buddha">
                <li>Hotline</li>
              </a>
            </ol>
          </div>
        </div>
        <div className="nav-right">
          <button className="login-button">Login</button>
          <button className="sign-up-button">Sign Up</button>
        </div>
      </div>
      <div className="main">
        <div className="main-header">
          <h2>Amazing</h2>
          <h2 className="h2-space">Culinary</h2>
          <h2>Recipes</h2>
        </div>
        {/* <div className="svg">
          <img src={Cooking} alt="Cooking" />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
