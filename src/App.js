import React, { Component } from "react";
import Login from "./Components/Login/Login";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedin: "Not logged in",
      user: {},
    };
  }

  componentDidMount() {
    const url = " https://citopay.in/webiscout/API/Login ";
    axios.get(url).then((res) => {
      console.log(res);
      this.setState({
        user: res,
      });
    });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <header>WebIScout</header>
          <section>
            <Switch>
              <Route
                exact
                path={"/"}
                render={(props) => <Login {...props} />}
              />
              <Redirect from="/login/" to="/dashboard/" />
              <Route
                exact={true}
                path="/dashboard"
                render={(props) => <Dashboard {...props} />}
              />
            </Switch>
          </section>
          <footer>
            <span>WebIScout</span>
          </footer>
        </Router>
      </div>
    );
  }
}
