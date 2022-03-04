import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { Form } from "../components/index";

class New extends Component {
  render() {
    const isLogin = this.props.isLogin;
    if (isLogin === false) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container is-half">
        <Form />
        <br />
      </div>
    );
  }
}

export default withRouter(New);
