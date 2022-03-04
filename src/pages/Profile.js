import React, { Component } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdate: false,
      nickname: "",
      position: "",
      subjects: "",
      image: "",
      new_image: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.fileChangeHandler = this.fileChangeHandler.bind(this);
    this.updateClick = this.updateClick.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.getProfile();
  }
  fileChangeHandler(event) {
    event.preventDefault();
    const file = event.target.files[0];
    this.setState({
      new_image: file,
      image: file["name"],
    });
  }
  updateClick(event) {
    event.preventDefault();
    if (this.state.isUpdate === true) {
      this.updateProfile();
    } else {
      this.setState((prevState) => ({ isUpdate: !prevState.isUpdate }));
    }
  }
  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }
  updateProfile() {
    const token = localStorage.getItem("token");
    console.log("[*] updateProfile");
    const formData = new FormData();
    formData.append("image", this.state.new_image);
    formData.append("nickname", this.state.nickname);
    formData.append("position", this.state.position);
    formData.append("subjects", this.state.subjects);
    console.log(formData.entries());
    axios
      .patch("http://localhost:8000/users/profile/", formData, {
        headers: {
          "content-type": "multipart/form-data",
          "Authorization": `Token ${token}`,
        },
      })
      .then((response) => {
        if (response.status < 300) {
          this.props.history.push("/");
        }
      });
  }
  getProfile() {
    const token = localStorage.getItem("token");
    console.log("[*] getProfile");
    axios
      .get("http://localhost:8000/users/profile/", {
        headers: {
          "Authorization": `Token ${token}`,
        },
      })
      .then((response) => {
        if (response.status < 300) {
          this.setState({
            nickname: response.data["nickname"],
            position: response.data["position"],
            subjects: response.data["subjects"],
            image: response.data["image"],
          });
        }
      });
  }
  render() {
    const isLogin = this.props.isLogin;
    const isUpdate = this.state.isUpdate;
    if (isLogin === false) {
      return <Redirect to="/login" />;
    }
    if (isUpdate === false) {
      return (
        <div className="container mcentered">
          <div className="profile-img">
            <div className="profile-img">
              <figure className="image is-128x128">
                <img
                  src={this.state.image}
                  onChange={this.handleChange}
                  alt="test"
                  width="256"
                />
              </figure>
            </div>
            <div className="texts mcentered">
              <h1 className="title" onChange={this.handleChange}>
                {this.state.nickname}
              </h1>
              <div className="tags are-medium">
                <span className="tag" onChange={this.handleChange}>
                  #{this.state.position}
                </span>
                {this.state.subjects.split(", ").map((subject, index) => {
                  return (
                    <span
                      className="tag"
                      onChange={this.handleChange}
                      key={index}
                    >
                      #{subject}
                    </span>
                  );
                })}
              </div>
              {/* <div className="button is-primary">
                <Link
                  to={{
                    pathname: "/profile/edit",
                    profile: this.state,
                  }}
                >
                  <span>프로필 수정하기</span>
                </Link>
              </div> */}
              <div
                className="button is-primary"
                href=""
                onClick={this.updateClick}
              >
                <span>프로필 수정하기</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container mcentered">
          <div className="profile-img">
            <div className="profile-img">
              {/* <figure className="image is-128x128">
                <img
                  src={this.state.image}
                  onChange={this.handleChange}
                  alt="test"
                  width="256"
                />
              </figure> */}
              <div className="file has-name is-centered">
                <label className="file-label">
                  <input
                    className="file-input"
                    type="file"
                    name="image"
                    onChange={this.fileChangeHandler}
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">Choose a file…</span>
                  </span>
                  <span className="file-name">{this.state.image}</span>
                </label>
              </div>
            </div>
            <div className="texts mcentered">
              <input
                className="input is-primary is-medium"
                type="text"
                name="nickname"
                onChange={this.handleChange}
                placeholder={this.state.nickname}
              />
              <input
                className="input is-primary is-medium"
                type="text"
                name="position"
                onChange={this.handleChange}
                placeholder={this.state.position}
              />
              <input
                className="input is-primary is-medium"
                type="text"
                name="subjects"
                onChange={this.handleChange}
                placeholder={this.state.subjects}
              />
              <div
                className="button is-primary"
                href=""
                onClick={this.updateClick}
              >
                <span>완료</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Profile);
