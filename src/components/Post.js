import React from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../shared/App.css";

const Post = (props) => {
  console.log("[Post.js] Constructor");
  console.log(props);
  return (
    <section>
      <div className="head">
        <h1 className="title">{props.Title}</h1>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <h2 className="subtitle">@TaeBbong</h2>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <span className="icon">
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </div>
            <div className="level-item">
              <span className="icon">
                <FontAwesomeIcon icon={faShareAlt} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="my-body">
        <figure className="image">
          <img
            className="is-2by1"
            src="https://wallpaperaccess.com/full/2586809.jpg"
            alt="test"
            width="640"
          />
        </figure>
        <div className="content is-medium">
          <p>
            Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum
            is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply
            dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem
            Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is
            simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
            Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum
            is simply dummy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Post;
