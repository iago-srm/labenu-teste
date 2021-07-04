import React from 'react';
import { DemoPage } from '../demo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/demo">
            <DemoPage />
          </Route>
          <Route path="/">
            <div className="Container">
              <h1>Rest API fetching Demo</h1>
              <Button variant="primary" ><Link to="/demo">Ver Demo</Link></Button>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
};

export default App;