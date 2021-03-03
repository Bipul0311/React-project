import React from "react";

function Card() {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src="https://hairstylesweekly.com/images/2012/12/Short-Japanese-Haircut-for-Office-Ladies.jpg"
          alt=""
        />
      </div>
      <div className="card-title h4">$35.44</div>
      <div className="container">
        <button className="btn1">BUY NOW</button>
        <br />
        <button className="btn2">ADD TO CART</button>
      </div>
      <div className="card-body">
        <h2>Going live in 2 hours , 25 minutes</h2>
        <br />
        <h3>This session includes</h3>
        <br />
        <ul>
          <li>Statics Presentation</li>
          <li>1 article</li>
          <li>Discussion</li>
          <li>Certificate of Completion</li>
        </ul>
      </div>
      <p className="center h5">Report</p>
    </div>
  );
}

export default Card;
