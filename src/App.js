import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/electric">
            <h1>Electric</h1>
          </Route>
          <Route path="/gas">
            <h1>Gas</h1>
          </Route>
          <Route path="/providers">
            <h1>Providers</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Home</h1>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;

      {/* localhost.com/ */}
      {/* localhost.com/electric */}
      {/* localhost.com/gas */}