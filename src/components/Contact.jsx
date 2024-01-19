import React from "react";
import CommShopAbout from "./CommShopAbout";
import Card1 from '../components/Images/CardBanner.jpg'
import Card2 from '../components/Images/CardBanner2.jpg'

const Contact = () => {
  return (
    <>
      <CommShopAbout title="Contact Us" Link="Home" Me="/Contact Us" />
      <div className="Contact">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6">
              <div className="LocationBox">
                <h2>Contact Information</h2>

                <div className="Information">
                  <span>
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  <span>Location</span>
                  <p>
                    Street 5, l-9/3, Industrial Area, Islamabad
                  </p>
                </div>
                <div className="Information">
                  <span>
                    <i class="fa-regular fa-envelope"></i>
                  </span>
                  <span>Email Drop Us</span>
                  <p>waterfly.info@gmail.com</p>
                </div>
                <div className="Information">
                  <span>
                    <i class="fa-solid fa-phone-flip"></i>
                  </span>
                  <span>Call for Help</span>
                  <p>+923494909836</p>
                  <p>+923115234656</p>
                </div>
              </div>
            </div>
            <di className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425292.822129666!2d72.75573487226379!3d33.615677116173025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1704130844218!5m2!1sen!2s"
                width="550"
                height="450"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </di>
          </div>
          <div className="row shopCard">
                  <div className="col-md-6">
                   <div className="ContactImags">
                  <img src={Card1} />
                  </div>
                   </div>
                   <div className="col-md-6">
                   <div className="ContactImags">
                  <img src={Card2} />
                  </div>
                   </div>
                 </div>

          <div className="row CommentRow">
            <h1>Leave a Comment</h1>
            <div className="col-6">
              <form action="https://formspree.io/f/xzbnbekw" method="POST">
                <div>
             
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
                    type="text"
                    className="form-control inputText"
                    name="Subject"
                    placeholder="Subject"
                    required
                  />
                       <textarea
                    type="text"
                    placeholder="Leave a Comment"
                    className="form-control textarea"
                    required
                    autoComplete="off"
                    name="Comment"
                  ></textarea>

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

export default Contact;
