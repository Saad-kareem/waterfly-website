import React from "react";
import { NavLink } from "react-router-dom";

const CommShopAbout = (props) => {
  return (
    <>
      <div className="Common">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="AboutHead">
              <h1>{props.title}</h1>
              <ul className="AboutLink">
                <li>
                  <NavLink to="/">{props.Link}</NavLink>
                </li>
                <li>{props.Me}</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommShopAbout;
