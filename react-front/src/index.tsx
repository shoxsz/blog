import './style/defaults.sass'

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import IndexPage from './components/pages/IndexPage/IndexPage';
import Header from './components/organisms/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostPage from './components/pages/PostPage/PostPage';
import AboutPage from './components/pages/AboutPage/AboutPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path={ ["/about"] } component={ AboutPage } />
        <Route path={ ["/posts/:slug"] } render={ (routeProps) => <PostPage slug={ routeProps.match.params.slug } /> }/>
        <Route path={ ["/index", "/"] } component={ IndexPage } />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
