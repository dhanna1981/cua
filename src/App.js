import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home'


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/electric">
           <Header />
            <h1>Electric</h1>
          </Route>
          <Route path="/gas">
            <Header />
            <h1>Gas</h1>
          </Route>
          <Route path="/about">
           <Header />
            <h1>About</h1>
          </Route>
          <Route path="/help">
           <Header />
            <h1>Get Help</h1>
          </Route>
          <Route path="/serviceareas">
           <Header />
            <h1>Service Areas</h1>
          </Route>
          <Route path="/providers">
           <Header />
            <h1>Service Providers</h1>
          </Route>
          <Route path="/utilities">
           <Header />
            <h1>Utility Companies</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <div className="footer__section">
        <Footer />
        </div>
      </div>     
    </Router>
  );
}

export default App;

