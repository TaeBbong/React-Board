import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const post = this.props.post;
    return (
      <div className="column is-one-quarter">
        <div className="card">
          <Link
            to={{
              pathname: "/detail/" + post.ID,
              post: post,
            }}
          >
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://blog.kakaocdn.net/dn/cVaw4d/btqDURwZDoX/q6XGmMMrktN33iW1v3gtMk/img.png"
                  alt="sample"
                  style={{ "objectFit": "fill" }}
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-item">
                  <div className="title is-4" size={4}>
                    {post.Title}
                  </div>
                  <div className="subtitle is-6">@{post.UserID}</div>
                </div>
              </div>
              <div className="content preview">
                <p>{post.Content}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;
