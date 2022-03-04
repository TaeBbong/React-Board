import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      body: "",
      image: null,
      imageName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.fileChangeHandler = this.fileChangeHandler.bind(this);
    this.postClick = this.postClick.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  }
  fileChangeHandler(event) {
    event.preventDefault();
    const file = event.target.files[0];
    this.setState({ image: file, imageName: file["name"] });
  }
  postClick() {
    const token = localStorage.getItem("token");
    console.log("[*] createPost");
    const formData = new FormData();
    formData.append("Title", this.state.title);
    // formData.append("category", this.state.category);
    formData.append("Content", this.state.body);
    // formData.append("image", this.state.image);
    console.log(formData.entries());
    axios
      .post("http://localhost:8080/api/posts/", formData, {
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
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">제목</label>
          <div className="control">
            <input
              className="input is-hovered"
              type="text"
              name="title"
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">카테고리</label>
          <div className="control">
            <div className="select">
              <select>
                <option>웹 프론트엔드</option>
                <option>웹 백엔드</option>
                <option>iOS 앱</option>
                <option>안드로이드 앱</option>
                <option>하이브리드 앱</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">본문</label>
          <div className="control">
            <textarea
              className="textarea is-hovered"
              rows="10"
              name="body"
              onChange={this.handleChange}
            ></textarea>
          </div>
        </div>

        <div className="field">
          <label className="label">배경사진</label>
          <div className="control">
            <div className="file has-name">
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  name="image"
                  onChange={this.fileChangeHandler}
                />
                <span className="file-cta">
                  <span className="file-label">Choose a file…</span>
                </span>
                <span className="file-name">{this.state.imageName}</span>
              </label>
            </div>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary" onClick={this.postClick}>
              완료
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Form);
