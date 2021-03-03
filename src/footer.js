import React from "react";

function Footer() {
  return (
    <>
      <section className="footer-first ">
        <div className="footer-main-block">
          <div className="">
            <div>
              <div className="row">
                <div className="col-md-3 col-lg-2 col-sm-6 column-1">
                  <div className="pages-link-block">
                    <ul className="pages-link-list-block">
                      <li>Terms</li>
                      <li>About us</li>
                      <li>Contact us</li>
                      <li>Privacy Policy</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-6 column-2">
                  <div className="pages-link-block">
                    <ul className="pages-link-list-block">
                      <li>Blog</li>
                      <li>Help & Support</li>
                      <li>Featured Session</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 py-5">
            <div className="float-left">
              <p className="h2">GURA</p>
            </div>
            <div className="float-right">
              <p>@ 2020 Gura, Inc.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
