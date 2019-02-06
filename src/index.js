import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Howto from './Howto';
import Navigation from './Nav';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const ROUTING = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/howto" component={Howto} />
      </Switch>
    </div>
  </BrowserRouter> 
);

ReactDOM.render(ROUTING, document.getElementById('root'));

serviceWorker.unregister();