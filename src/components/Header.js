import React from "react";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <h1>게시판</h1>
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button" href="/new">
              <span>
                <strong>새 글 작성</strong>
              </span>
            </a>
          </div>
        </div>
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary" href="/login">
              <span className="icon">
                <FontAwesomeIcon icon={faSignInAlt} />
              </span>
              <span>
                <strong>로그인</strong>
              </span>
            </a>
          </div>
        </div>
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-info" href="/profile">
              <span className="icon">
                <FontAwesomeIcon icon={faUserCircle} />
              </span>
              <span>
                <strong>프로필</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
