import React from "react";
import Delivery from "../CardImage/cta-01.png";
import PakStand from "../CardImage/pakstandard.png";
import Pcwr from "../CardImage/pcrwr.png";
import Fda from "../CardImage/fda.png";
import { Sdata } from "../SData";
import home1 from "./Images/HomeBanner.jpg";
import Cards from "./Cards";
import { NavLink } from "react-router-dom";
import health from "../CardImage/Health.jpg";
import { ChoiceData } from "./../ChoiceData";

const Common = () => {
  return (
    <>
      <div className=" Banner">
        <div className="row  ">
          <div className="col-md-6 ">
            <div className="HomeHead">
              <h1>Always Want Safe and Good Water for Healthy Life </h1>

              <p>
                WaterFly is a Packaged Drinking Water Brand. It manufactures and
                supplies Rich Mineral Water to Corporate Houses, Catering
                Services, Retail Locations at Large. We Guarantee Quality and
                Service at a Competitive Price.
              </p>
              <button className="btn btn-success">
                <NavLink to="/cart">Order Now</NavLink>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="home_img">
              <img src={home1} />
            </div>
          </div>
        </div>
      </div>
      <div className="second_section">
        <div className="Card_Heading">
          <h1 className="head_Home">We Deliver Best Quality Bottle Packs.</h1>
        </div>
        <div className="container">
          <div className="row">
            {Sdata.map((items) => {
              const { id, image, detail, price, liter, title, button, line } =
                items;
              return (
                <Cards
                  key={id}
                  image={image}
                  detail={detail}
                  price={price}
                  title={title}
                  liter={liter}
                  line={line}
                  button={button}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="container Govt">
        <div className="GovtHeading">
          <h2>
            Approved From All <span> Government Organizations </span>
          </h2>
        </div>
        <div className="col-12">
          <div className="Govt_Img d-md-flex justify-content-between">
            <img src={PakStand} />
            <img src={Pcwr} />
            <img src={Fda} />
          </div>
        </div>
      </div>
      <div className="Choice">
        <div className="container">
          <div className="choiceHead">
            <h2>
              Why to Choose<span className="WaterSpan">Water</span>
              <span className="CardSpan">Fly</span>{" "}
            </h2>
          </div>
          <div className="row">
            {ChoiceData.map((card) => (
              <div className="col-md-3">
                <div className="card card2">
                  <div>{card.icon}</div>
                  <div className="card-body cardBody">
                    <h6>{card.title}</h6>
                    <p>{card.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="healthyLife">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={health} />
            </div>
            <div className="col-md-6">
              <div className="HealthHead">
                <h1>We Always Want Safe and Healthy Water for Healthy Life.</h1>
                <p>
                  WaterFly is a Packaged Drinking Water Brand. It manufactures
                  and supplies Rich Mineral Water to Corporate Houses, Catering
                  Services, Retail Locations at Large. We Guarantee Quality and
                  Service at a Competitive Price.
                </p>
                <p>
                  The mineral content of any drinking water is measured
                  scientifically to check which are present. We add a light
                  blend of minerals to our water, to give WaterFly bottled
                  drinking water its distinctive, refreshing taste
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="deliveryBox">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={Delivery} />
            </div>
            <div className="col-md-6">
              <div className="deliveryHeading">
                <h1>Ready To Get Our Free Water Delivery Service.</h1>
                <p>
                  We give our services to all over islamabad. We give our free
                  delivery service within 45mints, anywhere in the Islamabad.
                </p>
                <ul className="deliveryList">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>Free Delivery</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>7 Days In A Week Service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Common;
