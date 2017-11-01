import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

const basename = '/react-snap-example';

const Nav = () => (
  <nav className="Nav">
    <Link to="/">Home</Link>
    <Link to="/about/">About</Link>
    <Link to="/async/">Async</Link>
  </nav>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p className="App-intro">
      This is the about page, go to the <Link to="/">home page</Link>?
    </p>
  </div>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <p className="App-intro">
      This is the home page, go to the <Link to="/about/">about page</Link>?
    </p>
  </div>
);

class Async extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  async componentDidMount() {
    fetch(`${process.env.NODE_ENV === 'production' ? basename : ''}/data.json`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          items: data.items,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>Async example</h2>
        {this.state.items.map(item => <div key={item}>{item}</div>)}
      </div>
    );
  }
}

const NoMatch = () => (
  <div>
    <h2>404 Not Found</h2>
    <p className="App-intro">The page you were looking for does not exist.</p>
  </div>
);

const App = () => (
  <BrowserRouter basename={basename}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/async/" component={Async} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
