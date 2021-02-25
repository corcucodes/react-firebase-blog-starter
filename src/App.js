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
      <h2>Auggy Blog 3</h2>
      
        <Link to="/">home</Link>

        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>

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
