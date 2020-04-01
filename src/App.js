import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./HomeComponent"
import { About } from "./About"
import { Resume } from "./Resume"
import { Portfolio } from "./Portfolio"
import { NoMatch } from "./NoMatch"
//import { Footer } from "./Footer"
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from "./Layout"
import { Navigation } from "./NavBar"
import { Jumbotron } from "./Jumbotron"

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route Component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
