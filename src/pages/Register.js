import React, { Component } from "react";
import axios from "axios";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../shared/App.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
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
    axios
      .post("http://localhost:8080/api/users/signup/", {
        Username: this.state.username,
        Password: this.state.password,
      })
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/login");
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
                    <label className="label">이메일</label>
                    <div className="control has-icons-left">
                      <input
                        type="email"
                        placeholder="이메일을 입력하세요."
                        className="input"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">비밀번호</label>
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
                  <div className="field">
                    <label className="label">비밀번호 확인</label>
                    <div className="control has-icons-left">
                      <input
                        type="password"
                        placeholder="*******"
                        className="input"
                        name="password2"
                        value={this.state.password2}
                        onChange={this.handleChange}
                        required
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <button
                      className="button is-primary is-fullwidth"
                      type="submit"
                    >
                      회원가입
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
