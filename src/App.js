import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import FAQ from "./components/FAQ";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">FAQ knowledgebase</a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
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
              <hr />
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
