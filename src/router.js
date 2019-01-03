import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products'
import Uploads from './routes/Uploads';
import Father from './routes/byvalue/Father';

// 一、
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/uploads" exact component={Uploads} />
        <Route path="/valueof" exact component={Father} />
      </Switch>
    </Router>
  );
}

// 二、动态modal


export default RouterConfig;