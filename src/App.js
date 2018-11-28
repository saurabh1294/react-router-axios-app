import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import FAQ from "./components/FAQ";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#myNavbar"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  <li className="nav-item">
                    <Link to={"/home"} className="nav-link">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/faqs"} className="nav-link">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/faqs" component={FAQ} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
