import React from "react";

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
            <a className="button is-primary" href="/">
              <strong>회원가입</strong>
            </a>
            <a className="button is-light" href="/login">
              <strong>로그인</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
