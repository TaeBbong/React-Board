import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Main, Like, My, Login, Detail } from "../pages/index";
import { Header, Footer } from "../components/index";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="centered">
          <Route exact path="/" component={Main} />
          <Route path="/like" component={Like} />
          <Route path="/my" component={My} />
          <Route path="/detail" component={Detail} />
        </div>
        <Route path="/login" component={Login} />
        <Footer />
      </div>
    );
  }
}

export default App;
