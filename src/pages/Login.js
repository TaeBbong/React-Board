import React, { Component } from "react";
import axios from "axios";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../shared/App.css";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    console.log("[Login.js] Constructor");
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("[Login.js] handleSubmit");
    axios
      .post("http://localhost:8080/api/users/signin/", {
        Username: this.state.username,
        Password: this.state.password,
      })
      .then((response) => {
        if (response.status < 300) {
          console.log("[Login.js] Call props.doLogin");
          this.props.doLogin();
          localStorage.setItem("token", response.data["token"]);
          localStorage.setItem("userId", response.data["UserID"]);
          localStorage.setItem("username", this.state.username);
          console.log(response.data);
          this.props.history.push("/");
        }
      });
  }
  render() {
    return (
      <section className="hero is-warning is-large">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-6-tablet is-5-desktop is-4-widescreen">
                <form onSubmit={this.handleSubmit} className="box">
                  <div className="field">
                    <label className="label">아이디</label>
                    <div className="control has-icons-left">
                      <input
                        type="text"
                        placeholder="아이디를 입력하세요."
                        className="input"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        required
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">패스워드</label>
                    <div className="control has-icons-left">
                      <input
                        type="password"
                        placeholder="*******"
                        className="input"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                    </div>
                  </div>
                  <div className="level">
                    <div className="level-left">
                      <div className="level-item">
                        <div className="field">
                          <button className="button is-primary" type="submit">
                            로그인
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="level-right">
                      <div className="level-item">
                        <a className="is-link" href="/register">
                          회원가입
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
                <br />
                <div className="content tcentered">
                  <strong>또는</strong>
                </div>
                <div className="buttons is-centered">
                  <button className="button is-white">
                    <span className="icon">
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                    <span>Github</span>
                  </button>
                  <button className="button is-info">
                    <span className="icon">
                      <FontAwesomeIcon icon={faFacebook} />
                    </span>
                    <span>Facebook</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Login);
