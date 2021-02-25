import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Create from "./pages/create";
import Post from "./pages/post";
import NoMatch from "./pages/no-match";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <h2>My React + Firebase Blog</h2>
          <button onClick=""  ></button>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/404" component={NoMatch} />
          <Route path="/:slug" component={Post} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
