import React from "react";
import CommShopAbout from "./CommShopAbout";
import { NavLink, Navigate } from "react-router-dom";

const Error = () => {
  return (
    <>
      <CommShopAbout title="404 Page" Link="Home" Me="/404" />
      <div className="Error">
        <div className="container">
          <div className="row">
            <div className="Error_Section">
            <div className="col-12">
              <h2>404</h2>
              <p>We're not being able to find the page you're looking for</p>
              <button className="btn btn-success">
                 <NavLink to='/'>Back Home</NavLink>
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
