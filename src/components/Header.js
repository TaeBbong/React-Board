import React from "react";
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
      </div>
    </div>
  );
};

export default Header;
