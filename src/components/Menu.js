import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const activeStyle = {
    color: "purple",
  };
  return (
    <div className="navbar">
      <div className="navbar-item">
        <NavLink exact to="/" activeStyle={activeStyle}>
          메인 피드
        </NavLink>
      </div>
      <div className="navbar-item">
        <NavLink exact to="/like" activeStyle={activeStyle}>
          저장한 글
        </NavLink>
      </div>
      <div className="navbar-item">
        <NavLink exact to="/my" activeStyle={activeStyle}>
          내 글
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
