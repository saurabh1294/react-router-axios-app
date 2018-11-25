import React, { Component } from "react";
import "../App.css";
import { FAQ } from "../components/FAQ";
import { Switch, Route, Link } from "react-router-dom";

export default class Home extends Component {
  // TODO uncomment this later when used
  // constructor(props) {
  //   super(props);
  //   // TODO do initialization here
  // }

  render() {
    return (
      <div className="App">
        <div className="jumbotron bg-image">
          <div className="container text-center">
            <div className="col-12">
              <h2>Search FAQs</h2>
            </div>
            <form action="/test" method="GET">
              <div className="col-12">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search FAQ Knowledge base"
                    id="txtSearch"
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-primary" type="submit">
                      <span className="glyphicon glyphicon-search" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="container-fluid bg-3 text-center">
          <Link to={"/faqs"} className="nav-link">
            <h3>>Learn more</h3>
          </Link>
        </div>
        <footer className="container-fluid text-center">
          <p>Copyright (c) Golibrary.co - 2018 - All rights reserved</p>
        </footer>
        <Switch>
          <Route path="/faqs" component={FAQ} />
        </Switch>
      </div>
    );
  }
}
