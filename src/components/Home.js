import React, { Component } from "react";
//import axios from "axios";

import "../App.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.onChangeHostName = this.onChangeHostName.bind(this);
    this.onChangePort = this.onChangePort.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      port: ""
    };
  }
  onChangeHostName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangePort(e) {
    this.setState({
      port: e.target.value
    });
  }
  onSubmit(e) {
    // TODO implement this
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron bg-image">
          <div className="container text-center">
            <div className="col-12">
              <h2>Search FAQs</h2>
            </div>
            <form action="/hms/accommodations" method="GET">
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
          <a href="eventznu.com">
            <h3>>Learn more</h3>
          </a>
        </div>
        <footer className="container-fluid text-center">
          <p>Copyright (c) Golibrary.co - 2018 - All rights reserved</p>
        </footer>
      </div>
    );
  }
}
