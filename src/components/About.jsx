import React from "react";
import Banner from "../CardImage/UrduBanner.jpg";
import CommShopAbout from "./CommShopAbout";
import { NavLink } from "react-router-dom";
import { Fdata } from "../Founder";

const About = () => {
  return (
    <>
      <CommShopAbout title="About Us" Link="Home" Me="/About Us" />
      <div className="AboutSection">
        <div className="container">
          <div className="About_Banner">
            <img src={Banner} />
          </div>

          <div className="row AboutRow">
            <p>
              <NavLink to="">CONSULTING</NavLink>
            </p>
            <div className="col-11">
              <div className="AboutText">
                <h2>
                  WaterFly Mineral Water Islamabad: Quenching Your Thirst
                  Naturally.
                </h2>
                <h6>Water Fly Mineral Water</h6>
                <p>
                  In a world that’s increasingly conscious of health and
                  sustainability, the demand for high-quality mineral water has
                  surged. Ora Green Mineral Water in Islamabad stands out as a
                  pioneer in delivering pure and Eco-friendly hydration to its
                  consumers. In this article, we’ll delve into the refreshing
                  world of Ora Green Mineral Water, exploring its source,
                  benefits, and commitment to environmental responsibility.
                </p>
              </div>
            </div>

            <div className="blockQuote">
              <div className="col-md-2 QuoteIcon">
                <i className="fa-solid fa-comment-dots"></i>
              </div>
              <div className="col-10">
                <h2>“Water is Life and Clean Water means Health</h2>
              </div>
            </div>
            <div className="col-12">
              <p className="aboutpara">
                WaterFly Mineral Water Islamabad is more than just water; it’s a
                commitment to health, sustainability, and environmental
                consciousness. With the ever-increasing concern for clean and
                pure drinking water, Ora Green emerges as a shining beacon in
                the heart of Pakistan’s capital.
              </p>
            </div>
            <div className="row">
              <div className="col-12 secondText">
                <h3>Purified Bottled Water</h3>
                <p>
                  Lorem ipsum dolor sit amet, consecte adipisicing elit sed do
                  eiusmod tempor incididunt labore aliqua enim minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip
                  commodo consequat duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <h6>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae illo inventore.
                </h6>
              </div>
            </div>
            <div className="row Founders">
              <h1>Our Team</h1>
             {Fdata.map((Item) =>
                 <div className="col-md-3">
                  <img src={Item.image} />
                   <h5>{Item.Name}</h5>
                   <p>{Item.Type}</p>
              </div>
              

             )}
                 
              
            </div>
            <div className="row">
              <div className="col-12 ">
                <div className="MediaIcons">
                  <span>Share On:</span>

                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>

                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>

                  <a href="#">
                    <i className="fa-brands fa-google-plus-g"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
