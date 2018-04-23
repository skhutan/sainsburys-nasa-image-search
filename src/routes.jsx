import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './app';
import AssetPage from './components/AssetPage';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/asset/:assetId" component={AssetPage} />
    </div>
  </Router>
);

export default Routes;
