import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";

const About = () =>
  <div>
    <h2>About</h2>
    <p className="App-intro">
      This is the about page, go to the <Link to="/">home page</Link>?
    </p>
  </div>;

const Home = () =>
  <div>
    <h2>Home</h2>
    <p className="App-intro">
      This is the home page, go to the <Link to="/about/">about page</Link>?
    </p>
  </div>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
