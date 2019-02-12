import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const ROUTING = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </>
  </BrowserRouter> 
);

ReactDOM.render(ROUTING, document.getElementById('root'));

serviceWorker.unregister();