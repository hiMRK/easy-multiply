import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Test from './Test';
import Navigation from './Nav';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const ROUTING = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </div>
  </BrowserRouter> 
);

ReactDOM.render(ROUTING, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
