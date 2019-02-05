import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Test from './Test';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const ROUTING = (
<BrowserRouter>
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/test">Users</Link>
      </li>
    </ul>
    <Route exact path="/" component={App} />
    <Route path="/test" component={Test} />
  </div>
</BrowserRouter> 
)

ReactDOM.render(ROUTING, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
