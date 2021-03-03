import React, { Component } from "react";
import Carousel from "../src/components/carousel";
class Recommendation extends Component {
  render() {
    return (
      <div className="px-5 pl-5">
        <p className="recommended-header mt-5">Recommended from you</p>
        <Carousel />
        <br></br>
      </div>
    );
  }
}

export default Recommendation;
