import React from "react";
import "./header.css";
import Cooking from "./Cooking.svg";

const Header = () => {



  return (
    <div className="header">
      <div className="nav">
        <div class="nav-left">
          <div class="logo">
              <h1>Cookeasy</h1>
          </div>
          <div class="navigation">
            <ol>
                <li>Shop</li>
                <li>Features</li>
                <li>Recipes</li>
                <li>Hotline</li>
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
      </div>
      <div className="svg">
          <img src={Cooking} alt="Cooking" />
        </div>
    </div>
  );
};

export default Header;
