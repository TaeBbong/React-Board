import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  Main,
  Like,
  My,
  Login,
  Detail,
  Register,
  New,
  Profile,
  ProfileEdit,
} from "../pages/index";
import { Header, Footer, Menu } from "../components/index";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="centered">
          <Route exact path="/" component={Menu} />
          <Route path="/like" component={Menu} />
          <Route path="/my" component={Menu} />
        </div>
        <div className="ncentered">
          <Route exact path="/" component={Main} />
          <Route path="/like" component={Like} />
          <Route path="/my" component={My} />
        </div>
        <div className="centered">
          <Route path="/detail" component={Detail} />
          <Route path="/new" component={New} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/profile/edit" component={ProfileEdit} />
        </div>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
