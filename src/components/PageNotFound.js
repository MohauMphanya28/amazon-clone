import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <Link to="/">
        <div>
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG1.png" alt="" />
        </div>
      </Link>
      <div>
        <p>
          Page not found. Go to{" "}
          <Link to="/" className="home-link">
            Home page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
