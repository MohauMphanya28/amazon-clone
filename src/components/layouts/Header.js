import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          className="header-logo"
        />
      </Link>

      <div className="header-search">
        <input className="header-input" type="text" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="header-nav">
        <Link to="/login">
          <div className="header-option">
            <span className="header-optionOne">Hello Guest</span>
            <span className="header-optionTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionOne">Returns</span>
            <span className="header-optionTwo">& Orders</span>
          </div>
        </Link>

        <div className="header-option">
          <span className="header-optionOne">Your</span>
          <span className="header-optionTwo">Prime</span>
        </div>

        <Link to="/basket">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />{" "}
            <span className="header-optionTwo header-basketCount">0</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
