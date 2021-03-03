import React from "react";
// import './Discover.css';
import { Row, Col } from "reactstrap";
import Card from "./card";

function Discover() {
  return (
    <div>
      <div className="data">
        <div className="container py-5">
          <p className="data_title h2">Marketing With Zero Budget</p>
          <br />
          <p className="data_desc h4">
            Some of the most beneficial tips and tricks I've come across
            <br />
            <Card />
            to grow my instagram from less than 100 users to 5k+ users
          </p>
          <br />

          <p className="data_rating h5">
            {/* 4.5 <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
          <StarHalfIcon /> (2,490 ratings) 3843 students */}
            4.5
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            (2,490 ratings) 3,843 students
            <br />
            Created by Alexa Smith
          </p>
          <p className="desc_end h5 font-weight-bold">
            Proceeds from this session are going towards black lives matters
          </p>
        </div>
      </div>

      <div className="session">
        <p className="h3 font-weight-bold">Session takeaways</p>
        <Row>
          <Col md={6} lg={6} sm={12}>
            <p className=" h6">
              Grow your instagram linkedin with real strategies{" "}
            </p>
          </Col>
          <Col md={6} lg={6} sm={12}>
            <p className="h6">
              Integrate Analytics strategies to measure your conversion
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6} lg={6} sm={12}>
            <p className="h6">
              Build your calender around timely events and happenings with your
              brand
            </p>{" "}
          </Col>
          <Col md={6} sm={12} lg={6}>
            <p className=" h6">
              Start honing in on the strategies that show the most promising
              ROI'S
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Discover;
