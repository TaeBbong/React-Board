import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="container mcentered">
        <div className="profile-img">
          <div className="profile-img">
            <figure className="image is-128x128">
              <img
                src="https://i.pinimg.com/736x/52/40/30/524030541ef21900b9142bf1d8a9109d.jpg"
                alt="test"
                width="256"
              />
            </figure>
          </div>
          <div className="texts mcentered">
            <h1 className="title">권태형</h1>
            <div className="tags are-medium">
              <span className="tag">#TaeBbong</span>
              <span className="tag">#백엔드</span>
              <span className="tag">#Django</span>
              <span className="tag">#Flutter</span>
            </div>
            <a className="button is-primary" href="/profile/edit">
              <span>프로필 수정하기</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
