import React, { Component } from "react";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        450: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          margin: 15,
          nav: false,
        },
        1000: {
          items: 3,
          margin: 20,
          nav: false,
        },
        1399: {
          items: 4,
          nav: false,
          dots: false,
        },
      },
    };
  }

  render() {
    return (
      <div>
        <OwlCarousel
          className="owl-theme"
          // loop={true}
          margin={30}
          nav={true}
          //items={4}
          dots={false}
          responsive={this.state.responsive}
          nav
        >
          <div className="message-class-blk">
            <div className="img-blk">
              <div className="img-wrap">
                <img
                  src="https://thumbor.forbes.com/thumbor/711x466/https://specials-images.forbesimg.com/dam/imageserve/1032729136/960x0.jpg?fit=scale"
                  className="img-fluid first-img message-carousel-image"
                  alt="pf-image1"
                />
              </div>
              {/* <span className="heart"> </span> */}
              <p className="pt-2 carousel-text">Marketing with zero budget</p>
              <p className="carousel-host-name"> Alexa Smith </p>
              <p className="grey-text">Going live in 2 hours, 25mins</p>

              <p className="price">$10.99</p>
            </div>
          </div>
          <div className="message-class-blk">
            <div className="img-blk">
              <img
                src="https://www.thealist.me/wp-content/uploads/2018/12/Alyssa-Campanella-The-A-List-Montreal-2018-7371.jpg"
                className="img-fluid message-carousel-image"
                alt="pf-image1"
              />
              <p className="pt-2 carousel-text">
                Validating Customer Feedback with Virtual Sessions
              </p>
              <p className="carousel-host-name"> Jessica Green </p>

              <p className="price">$4.99</p>
            </div>
          </div>
          <div className="message-class-blk">
            <div className="img-blk">
              <img
                src="https://thumbor.forbes.com/thumbor/711x466/https://specials-images.forbesimg.com/dam/imageserve/1032729136/960x0.jpg?fit=scale"
                className="img-fluid first-img message-carousel-image"
                alt="pf-image1"
              />

              {/* <span className="heart"> </span> */}
              <p className="pt-2 carousel-text">
                Using Optimizely to A/B Test your Landing Page
              </p>
              <p className="carousel-host-name"> Michelle Chan </p>
              <p className="grey-text">Going live in 4 days</p>

              <p className="price">$12.00</p>
            </div>
          </div>
          <div className="message-class-blk">
            <div className="img-blk">
              <img
                src="https://www.thealist.me/wp-content/uploads/2018/12/Alyssa-Campanella-The-A-List-Montreal-2018-7371.jpg"
                className="img-fluid message-carousel-image"
                alt="pf-image1"
              />
              <p className="pt-2 carousel-text">
                Email Marketing that actually converts into customers
              </p>
              <p className="carousel-host-name"> Tina Jones </p>
              <p className="grey-text">Going live in 2 weeks</p>

              <p className="price">$8.00</p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

export default Carousel;
