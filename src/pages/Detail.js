import React, { Component } from "react";
import { Post, Comment } from "../components/index";

class Detail extends Component {
  render() {
    const post = this.props.post;
    console.log(this.props.params);
    return (
      <div>
        <Post post={post} />
        <hr />
        <Comment />
        <br />
      </div>
    );
  }
}

export default Detail;
