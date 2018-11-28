import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { fetAllFAQS } from "../actions/actions";

export class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {},
      title: "",
      body: ""
    };
    this.showFAQ.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data.length !== nextProps.data.length) {
      this.setProps(nextProps, 0);
    }
  }

  setProps(props, faqId) {
    this.setState(
      {
        response: props.data
      },
      () => {
        this.setState({
          title: this.state.response[0].response.faqs[faqId].title,
          body: this.state.response[0].response.faqs[faqId].body
        });
      }
    );
  }

  componentDidMount() {
    this.props.fetAllFAQS();
  }

  showFAQ = faqId => {
    this.setProps(this.props, faqId);
  };

  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row content visible-lg visible-md visible-sm">
          <div className="col-sm-10 text-left">
            <h1>{this.state.title}</h1>
            <p>{this.state.body}</p>
            <hr />
            <h3>Test</h3>
            <p>Lorem ipsum...</p>
          </div>
          <div className="col-sm-2 sidenav">
            <p>
              <Link to={"#/"} onClick={() => this.showFAQ(0)}>
                Link1
              </Link>
            </p>
            <p>
              <Link to={"#/"} onClick={() => this.showFAQ(1)}>
                Link2
              </Link>
            </p>
            <p>
              <Link to={"#/"} onClick={() => this.showFAQ(2)}>
                Link3
              </Link>
            </p>
          </div>
        </div>

        <div className="row content visible-xs">
          <div className="col-sm-2 sidenav">
            <p>
              <Link to={"#/"} onClick={() => this.showFAQ(0)}>
                Link1
              </Link>
            </p>
            <p>
              <Link to={"#/"} onClick={() => this.showFAQ(1)}>
                Link2
              </Link>
            </p>
            <p>
              <Link to={"#/"} onClick={() => this.showFAQ(2)}>
                Link3
              </Link>
            </p>
          </div>
          <div className="col-sm-10 text-left">
            <h1>{this.state.title}</h1>
            <p>{this.state.body}</p>
            <hr />
            <h3>Test</h3>
            <p>Lorem ipsum...</p>
          </div>
        </div>
        <Switch>
          <Route path="/faqs" />
        </Switch>
        <footer className="container-fluid text-center">
          <p>Copyright (c) Golibrary.co - 2018 - All rights reserved</p>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(
  mapStateToProps,
  { fetAllFAQS }
)(FAQ);
