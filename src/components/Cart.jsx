import React from "react";
import b1 from "../components/Images/HomeBanner.jpg";
// import b1 from "../CardImage/19ltr.jpg";
import { NavLink } from "react-router-dom";
import { CartData } from "./../CartData";
import Cards from "./Cards";

const Cart = () => {
  return (
    <>
      <div className="Cart">
        <div className=" container ">
          <div className="row cart_row">
            <div className="col-md-6">
              <div className="cart_img">
                <img src={b1} />
              </div>
            </div>
            <div className="col-md-5">
              <div className="cart_heading">
                <h1>WaterFly 19Ltr</h1>
                <div className="StarsHead">
                  <ul className="Stars">
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                  <NavLink>( 5 Reviews )</NavLink>
                </div>
                <h5>Rs200</h5>
                <p className="detail">
                  WaterFly 19 Liter bottle is a large, reusable container
                  for storing and dispensing clean, mineral-rich drinking water.
                </p>
                <button className="btn btn-success btn1">
                  <NavLink to='https://wa.me/+923494909836'>Order WhatsApp</NavLink>
                </button>
                <div className="cartType">
                  <p>Category: Watar</p>
                  <p>Tags: water, bottle</p>
                </div>
                <div className="socialMedia">
                  <h4>Follow Us</h4>
                  <ul className="social-links">
                    <li>
                      <i class="fa-brands fa-facebook"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-vimeo"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-google-plus-g"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="products">
            <h1>Related Products</h1>
            <div className="container">
              <div className="row">
                {CartData.map((items) => {
                  const { id, image, detail, price, liter, title, button } =
                    items;
                  return (
                    <Cards
                      key={id}
                      image={image}
                      detail={detail}
                      price={price}
                      title={title}
                      liter={liter}
                      button={button}
                    />
                  );
                })}
                <h1 className="comment">Comments (0 )</h1>
              </div>
            </div>
          </div>
          <div className="row CommentSection">
            <h1>Leave a Comment</h1>
            <div className="col-12">
              <form action="https://formspree.io/f/xzbnbekw"
                method="POST">
                <div>
                  <textarea
                    type="text"
                    placeholder="Leave a Comment"
                    className="form-control textarea"
                    required
                    autoComplete="off"
                    name="Comment"
                  ></textarea>
                  <input
                    type="text"
                    className="form-control inputText"
                    name="Name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    className="form-control inputText"
                    name="Email"
                    placeholder="Email Address"
                    required
                  />

                  <input
                    className="btn btn-success"
                    type="submit"
                    value="Submit Now"
                  />
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Cart;
