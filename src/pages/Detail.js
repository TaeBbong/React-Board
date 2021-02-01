import React, { Component } from "react";
import { Post, Comment } from "../components/index";

class Detail extends Component {
  render() {
    return (
      <div>
        <Post />
        <hr />
        <Comment />
        <br />
      </div>
    );
  }
}

export default Detail;
