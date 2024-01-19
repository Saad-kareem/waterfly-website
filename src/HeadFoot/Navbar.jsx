import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/LogoWater.jpg";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* <div className="NavBar">
        <div className="logo">
          <img src={logo} />
        </div>
        <ul className="Nav_Link">
          <li>
            <NavLink  to="/">Home</NavLink>
          </li>
          <li>
            <NavLink  to="/about">About</NavLink>
          </li>
          <li>
            <NavLink  to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
      
        </ul>
      </div> */}
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid NavBar">
            <div className="logo">
              <img src={logo} />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setToggle(!toggle)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${toggle ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/shop">
                    Shop
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
