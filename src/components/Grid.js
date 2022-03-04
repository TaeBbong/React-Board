import React, { Component } from "react";
import "../shared/App.sass";
import Card from "./Card";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
    this.parsePosts = this.parsePosts.bind(this);
    this.parsePosts();
  }
  parsePosts() {
    // console.log("[*] parsePosts");
  }
  render() {
    console.log("[*] Grid render");
    console.log(this.props.posts);
    if (this.props.posts) {
      return (
        <div className="columns is-multiline">
          {this.props.posts.map((post, index) => {
            return <Card post={post} key={index} />;
          })}
        </div>
      );
    }
    return <div></div>;
  }
}

export default Grid;
