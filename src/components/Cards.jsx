import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ image, title, liter, detail, price, button, line }) => {
  return (
    <>
     
      <div className="col-md-4 ">
        <div className="card">
          <img src={image} />
          <div>
            <img src={line} />
          </div>
          <div className="card-body">
            <div className="card-title">
              <h6>{liter}</h6>
              <h4>
                <NavLink>{title}</NavLink>
              </h4>
              <h5>{price}</h5>
            </div>
            <div className="card-text">
              <p>{detail}</p>
            </div>
            <button className="btn btn-success">
              <NavLink to='https://wa.me/+923494909836' >{button}</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
