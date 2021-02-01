import React, { Component } from "react";
import { Post, Comment } from "../components/index";

class Detail extends Component {
  render() {
    return (
      <div>
        <Post />
        <Comment />
      </div>
    );
  }
}

export default Detail;
