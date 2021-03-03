import React from "react";
import { Row, Col } from "reactstrap";

function Host() {
  return (
    <div className="container">
      <p className="host-header h2 font-weight-bold">Host</p>
      <p className="host-name font-weight-bold h4">Alexa Smith</p>
      <p className="detail-host h5 font-weight-light">
        CEO at Social Marketing, Inc.
      </p>
      <div className="host-block d-flex align-items-center position-relative">
        <div className="image-block host-user-img-block d-inline-flex">
          <img
            src="https://www.thealist.me/wp-content/uploads/2018/12/Alyssa-Campanella-The-A-List-Montreal-2018-7371.jpg"
            alt="user-img"
            className="img-fluid profile-img"
          />
        </div>
        <div className="host-user-info d-inline-flex flex-column">
          <i className="fa fa-star yellow-star d-inline-block">
            <p className="font-text d-inline-block pl-2">4.5 overall rating</p>
          </i>
          <i class="fa fa-bookmark d-inline-block" aria-hidden="true">
            <p className="font-text d-inline-block pl-2">
              32,483 total reviews
            </p>
          </i>
          <i class="fa fa-graduation-cap d-inline-block" aria-hidden="true">
            <p className="font-text d-inline-block pl-2">10,235 attendees</p>
          </i>
          <i class="fa fa-television d-inline-block" aria-hidden="true">
            <p className="font-text d-inline-block pl-2">13 past sessions</p>
          </i>
        </div>
      </div>
      <Row>
        <Col md={6} sm={12} lg={8}>
          <div className="detail">
            <p className="font-weight-bold h6">
              This course is used at top companies like Amazon, Unilever,
              Walmart, Nissan, and Citibank
            </p>
            <p>
              <span className="font-weight-bold h6">
                Alexa Smith is the CEO at Social Marketing, Inc.
              </span>{" "}
              Throughout my journey as both an enterpreneur and as a teacher,
              I've found the most rewarding part about life is giving back and
              sharing the valuable knwledge that I have learned over the years
              through online courses.
            </p>
            <p>
              Versions of the Lorem ipsum text have been used in typesetting at
              least since the 1960s, when it was popularized by advertisements
              for Letraset transfer sheets. Lorem ipsum was introduced to the
              digital world in the mid-1980s, when Aldus employed it in graphic
              and word-processing templates for its desktop publishing program
              PageMaker. Other popular word processors including Pages and
              Microsoft Word have since adopted Lorem ipsum as well.
            </p>
            <p>
              {" "}
              I think of myself more as a mentor than an instructor, and every
              student that purchases the course
              <br></br>
              <span className="text-blur">
                and ultimately moves forward with these 11 sessions, have grown
                exponentially in their careers through the learning.
              </span>
            </p>
            <p className="text-primary">
              Show more <i className="fa fa-chevron-down"></i>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={8} lg={8} sm={12}>
          <div class="side">
            <div>
              <p className="h1">4.5</p>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <p className="h7">Host Rating</p>
            </div>
          </div>
          <div class="middle">
            <div class="bar-container">
              <div class="bar-5"></div>
            </div>
          </div>
          <div class="side right">
            <div>
              {" "}
              <p className="grey-text">
                {" "}
                5 stars <span className="perc checked"> 40%</span>
              </p>{" "}
            </div>
          </div>
          {/* <div class="side">
            <div>4 star</div>
          </div> */}
          <div class="middle">
            <div class="bar-container">
              <div class="bar-4"></div>
            </div>
          </div>
          <div class="side right">
            <div>
              <p className="grey-text">
                {" "}
                4 stars <span className="perc checked"> 30%</span>
              </p>{" "}
            </div>
          </div>
          {/* <div class="side">
            <div>3 star</div>
          </div> */}
          <div class="middle">
            <div class="bar-container">
              <div class="bar-3"></div>
            </div>
          </div>
          <div class="side right">
            <div>
              {" "}
              <p className="grey-text">
                {" "}
                3 stars <span className="perc checked"> 15%</span>
              </p>{" "}
            </div>
          </div>
          {/* <div class="side">
            <div></div>
          </div> */}
          <div class="middle">
            <div class="bar-container">
              <div class="bar-2"></div>
            </div>
          </div>
          <div class="side right">
            <div>
              {" "}
              <p className="grey-text">
                {" "}
                2 star <span className="perc checked"> 10%</span>
              </p>{" "}
            </div>
          </div>
          <div class="side">
            <div></div>
          </div>
          <div class="middle">
            <div class="bar-container margin-left-50">
              <div class="bar-1"></div>
            </div>
          </div>
          <div class="side right ml-50">
            <div>
              {" "}
              <p className="grey-text">
                {" "}
                1 star <span className="perc checked"> 5%</span>
              </p>{" "}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Host;
