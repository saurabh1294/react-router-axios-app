import React, { Component } from "react";
import axios from "axios";
import "../App.css";

export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = { serverports: [] };
  }
  componentDidMount() {
    console.log("COMPONENT did mount index.js");
    axios
      .get("http://localhost:3456/faqs/public/api/v1/static/list")
      .then(response => {
        console.log("GOT CMS respone here", response);
        this.setState({ serverports: response.data });
      })
      .catch(function(error) {
        console.log(error);
        console.log("HERE");
      })
      .then(response => {
        console.log("finally here", response);
      });
  }
  
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row content visible-lg visible-md visible-sm">
          <div className="col-sm-10 text-left">
            <h1>Welcome</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <hr />
            <h3>Test</h3>
            <p>Lorem ipsum...</p>
          </div>
          <div className="col-sm-2 sidenav">
            <p>
              <a href="golibrary.co">Link1</a>
            </p>
            <p>
              <a href="golibrary.co">Link2</a>
            </p>
            <p>
              <a href="golibrary.co">Link3</a>
            </p>
          </div>
        </div>

        <div className="row content visible-xs">
          <div className="col-sm-2 sidenav">
            <p>
              <a href="golibrary.co">Link1</a>
            </p>
            <p>
              <a href="golibrary.co">Link2</a>
            </p>
            <p>
              <a href="golibrary.co">Link3</a>
            </p>
          </div>
          <div className="col-sm-10 text-left">
            <h1>Welcome</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <hr />
            <h3>Test</h3>
            <p>Lorem ipsum...</p>
          </div>
        </div>
        <footer className="container-fluid text-center">
          <p>Copyright (c) Golibrary.co - 2018 - All rights reserved</p>
        </footer>
      </div>
    );
  }
}
