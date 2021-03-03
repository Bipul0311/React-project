import React from "react";
import { Col, Row } from "reactstrap";

function Requirements() {
  return (
    <>
      <div className="requirement-wrapper container">
        <div className="req-header">
          <p className="h2 font-weight-bold">Requirements</p>
          <p className="h6 font-weight-bold">
            Prequisite Required{" "}
            <span className="grey-text ml-4"> 2 min to complete</span>
          </p>
          <Row>
            <Col md={8} lg={7} sm={12}>
              <p className="h7">
                You should have a general understanding of social media,
                specifically Instagram and Linkedln. It would also be helpful if
                you have business accounts for each
              </p>
              <br></br>
              <div>
                <p className="h2">Description</p>
                <p className="h6 font-weight-bold">
                  This course is used at top companies like Amazon, Unilever,
                  Walmart, Nissan and Citibank
                  <br></br>
                  <span className="grey-text">
                    Course Version 7.1 | updated april 2020
                  </span>
                </p>
              </div>
              <div className="pt-4">
                <p className="h7">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content. Lorem ipsum may be used as a placeholder
                  before final copy is available. It is also used to temporarily
                  replace text in a process called greeking, which allows
                  designers to consider the form of a webpage or publication,
                  without the meaning of the text influencing the design. Lorem
                  ipsum is typically a corrupted version of 'De finibus bonorum
                  et malorum', a 1st century BC text by the Roman statesman
                  <span className="text-blur">
                    {" "}
                    <br></br>
                    and philosopher Cicero, with words altered, added, and
                    removed to make it nonsensical and improper Latin.
                  </span>
                </p>
                <p className="text-primary">
                  Show more <i className="fa fa-chevron-down"></i>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Requirements;
