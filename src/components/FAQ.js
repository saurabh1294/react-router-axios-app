import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { fetAllFAQS } from "../actions/actions";

export class FAQ extends Component {
  // TODO - implement constructor if needed
  constructor(props) {
    super(props);
    this.state = {
      response: {},
      title: "",
      body: "",
      faqNum: -1
    };
    this.showFAQ.bind(this);
  }

  componentWillReceiveProps(props) {
    // if (this.state.faqNum === -1) {
    //   this.setState(
    //     {
    //       response: props.data
    //     },
    //     () => {
    //       this.setState({
    //         title: this.state.response[0].response.faqs[0].title,
    //         body: this.state.response[0].response.faqs[0].body
    //       });
    //     }
    //   );
    // }
    // TODO - fix this
  }

  componentDidMount() {
    this.props.fetAllFAQS();
  }

  showFAQ = faqId => {
    this.setState(
      {
        response: this.props.data,
        faqNum: faqId
      },
      () => {
        this.setState({
          title: this.state.response[0].response.faqs[faqId].title,
          body: this.state.response[0].response.faqs[faqId].body
        });
      }
    );
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
