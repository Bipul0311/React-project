import React from "react";
// import "./App.css";
// import "../src/assets/styles.css";
import Header from "./Header";
import Discover from "./Discover";
import Host from "./Host";
import Signup from "./Signup";
import Login from "./Login";
import Reviews from "./Reviews";
import Recommendation from "./recommendation";
import HostSession from "./HostSession";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./footer";
import Requirements from "./Requirements";

function App() {
  return (
    <Router>
      <div className="card">
        <Header />
        <Route exact path="/" component={Discover} />

        <Route path="/Host" component={Host} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
        <Requirements />
        <Recommendation />
        <Host />
        <Reviews />
        <HostSession />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

/* {header} */
/* {body} */
/* {card} */
/* {footer} */
