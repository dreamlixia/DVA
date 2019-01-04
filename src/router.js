import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Products from './routes/Products'
import Uploads from './routes/Uploads';
import Father from './routes/byvalue/Father';
import IndexPage from './routes/IndexPage';

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
    )
}

export default RouterConfig;