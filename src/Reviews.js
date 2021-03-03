import React from "react";
// import './Header.css';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from "reactstrap";

function Reviews() {
  return (
    <div className="reviews-wrap">
      <div className="container py-5">
        <h1 className="">Reviews</h1>
        <Row>
          <Col lg={4} md={4} sm={12}>
            <select required className="select-box">
              <option value="" hidden className="">
                All ratings
              </option>

              <option value="1">High School</option>
              <option value="2">Some College</option>
              <option value="3">Associates</option>
              <option value="4">Bachelor’s</option>
              <option value="5">Master’s</option>
              <option value="6">Doctorate</option>
            </select>
          </Col>
        </Row>

        <div className="review-block py-4">
          <Row>
            <Col md={6} lg={8} sm={12}>
              <div className="user-detail  d-flex align-items-center position-relative">
                <div className="review-img-block image-block host-user-img-block d-inline-flex">
                  <img
                    src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=" "
                    className="img-fluid review-img"
                  />
                </div>

                <div className="review-details host-user-info d-inline-flex flex-column">
                  <p className="font-weight-bold h5">
                    Jessica Smith{" "}
                    <span className="grey-text ml-2">
                      {" "}
                      Marketing with Zero Budget
                    </span>
                  </p>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>

                    <span class="fa fa-star"></span>
                    <span className="grey-text h7 ml-3">yesterday</span>
                  </div>
                  <p>
                    {" "}
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface
                    without relying on meaningful content. Lorem ipsum may be
                    used as a placeholder before final copy is available. It is
                    also used to temporarily replace text in a process called
                    greeking, which allows designers to consider the form of a
                    webpage or publication, without the meaning of the text
                    influencing the design.
                  </p>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="user-detail  d-flex align-items-center position-relative">
                <div className="review-img-block image-block host-user-img-block d-inline-flex">
                  <img
                    src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=" "
                    className="img-fluid review-img"
                  />
                </div>

                <div className="review-details host-user-info d-inline-flex flex-column">
                  <p className="font-weight-bold h5">
                    Jerry Halliwell{" "}
                    <span className="grey-text ml-2">
                      {" "}
                      Using Comedy in the Workspace
                    </span>
                  </p>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>

                    <span className="grey-text h7 ml-3">1 week ago</span>
                  </div>
                  <p>
                    {" "}
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface
                    without relying on meaningful content. Lorem ipsum may be
                    used as a placeholder before final copy is available. It is
                    also used to temporarily replace text in a process called
                    greeking, which allows designers to consider the form of a
                    webpage or publication, without the meaning of the text
                    influencing the design.
                  </p>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="user-detail  d-flex align-items-center position-relative">
                <div className="review-img-block image-block host-user-img-block d-inline-flex">
                  <img
                    src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=" "
                    className="img-fluid review-img"
                  />
                </div>

                <div className="review-details host-user-info d-inline-flex flex-column">
                  <p className="font-weight-bold h5">
                    Mandy Harold{" "}
                    <span className="grey-text ml-2">
                      {" "}
                      Building a brand in COVID world
                    </span>
                  </p>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span className="grey-text h7 ml-3">a month ago</span>
                  </div>
                  <p>
                    {" "}
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface
                    without relying on meaningful content. Lorem ipsum may be
                    used as a placeholder before final copy is available. It is
                    also used to temporarily replace text in a process called
                    greeking, which allows designers to consider the form of a
                    webpage or publication, without the meaning of the text
                    influencing the design.
                  </p>
                </div>
              </div>
              <div className="see-more">
                <button className="large-btn font-bold">
                  See more ratings
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <hr className="separator"></hr>
    </div>
  );
}

export default Reviews;
