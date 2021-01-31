import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Main, Like, My, Login } from "../pages/index";
import { Header, Footer } from "../components/index";
import "./App.css";
import "./App.sass";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="centered">
          <Route exact path="/" component={Main} />
          <Route path="/like" component={Like} />
          <Route path="/my" component={My} />
          <Route path="/login" component={Login} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
