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
} from "../pages/index";
import { Header, Footer, Menu } from "../components/index";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Constructor");
    const token = localStorage.getItem("token");
    this.state = {
      // eslint-disable-next-line
      isLogin: token != "null",
    };
    console.log("[App.js] token: ", token);
    console.log("[App.js] isLogin: ", this.state.isLogin);
    this.doLogin = this.doLogin.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }
  doLogin() {
    console.log("[App.js] doLogin");
    this.setState({ isLogin: true }, () => {
      console.log("[App.js] isLogin after doLogin: ", this.state.isLogin);
    });
  }
  doLogout() {
    console.log("[App.js] doLogout");
    this.setState({ isLogin: false }, () => {
      console.log("[App.js] isLogin after doLogout: ", this.state.isLogin);
    });
  }
  render() {
    return (
      <div>
        <Header doLogout={this.doLogout} isLogin={this.state.isLogin} />
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
          <Route path="/detail/:pk" render={(post) => <Detail post={post} />} />
          <Route
            path="/new"
            render={() => <New isLogin={this.state.isLogin} />}
          />
          <Route
            path="/profile"
            render={() => <Profile isLogin={this.state.isLogin} />}
          />
        </div>
        <div>
          <Route
            path="/login"
            render={() => (
              <Login doLogin={this.doLogin} isLogin={this.state.isLogin} />
            )}
          />
          <Route path="/register" component={Register} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
