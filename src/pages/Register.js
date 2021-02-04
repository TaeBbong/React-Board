import React, { Component } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../shared/App.css";

class Register extends Component {
  render() {
    return (
      <section className="hero is-warning is-large">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-6-tablet is-5-desktop is-4-widescreen">
                <form action="" className="box">
                  <div className="field">
                    <label className="label">이메일</label>
                    <div className="control has-icons-left">
                      <input
                        type="email"
                        placeholder="e.g. bobsmith@gmail.com"
                        class="input"
                        required
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">닉네임</label>
                    <div className="control has-icons-left">
                      <input
                        type="text"
                        placeholder="e.g. bobsmith@gmail.com"
                        class="input"
                        required
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <label for="" class="label">
                      비밀번호
                    </label>
                    <div class="control has-icons-left">
                      <input
                        type="password"
                        placeholder="*******"
                        class="input"
                        required
                      />
                      <span class="icon is-small is-left">
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <label for="" class="label">
                      비밀번호 확인
                    </label>
                    <div class="control has-icons-left">
                      <input
                        type="password"
                        placeholder="*******"
                        class="input"
                        required
                      />
                      <span class="icon is-small is-left">
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <button class="button is-primary is-fullwidth">
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
