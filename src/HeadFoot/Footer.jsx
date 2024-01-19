import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import Scroll from "./Scroll";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footerDetail ">
                <h1>
                  Please <span>Call</span> Us to Take an Extraordinary Service
                </h1>
                <h3>
                  <a href="#">03494909836</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="row MainLists">
            <div className="col-md-3">
              <div className="firstFooter">
                <h1>WaterFly </h1>

                <p>
                  The brand promises the assurance of clean and safe drinking
                  water. Every drop of WaterFly goes through a rigorous 12 step
                  verification process..
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="secondFooter">
                <h1>Address</h1>
                <ul className="listFooter">
                  <li>WaterFly,</li>
                  <li>Industrial Area</li>
                  <li> Street 5, l-19/3 ,</li>
                  <li> Islamabad,Pakistan</li>
                </ul>
                <ul className="list2Footer">
                  <li className="phone">
                    <i className="fa-solid fa-phone phones"></i>
                    <a href="tel:+923494909836">+923494909836</a>
                  </li>
                  <li className="emailList">
                    <i className="fa-solid fa-envelope-open-text"></i>
                    <a href="mailto:waterfly.info@gmail.com">
                      waterfly.info@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className="ThirdFooter">
                <h1>Usefull Link</h1>
                <ul className="list2Footer lastFooter">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop">Shop</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="/privacyPolicy">Privacy Policy</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="socialmedia">
              <p>
                <a href="#">WaterFly</a> © 2024 All Right Reserved
              </p>
              <div className="social_Icons">
                <NavLink to="https://wa.me/+923494909836">
                  <i class="fa-brands fa-whatsapp whatsApp"></i>
                </NavLink>

                <i className="fa-brands fa-facebook Facbook"></i>
                <i className="fa-brands fa-youtube Youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scroll />
    </>
  );
};

export default Footer;
