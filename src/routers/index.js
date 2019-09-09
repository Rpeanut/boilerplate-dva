import React from 'react';
import { router } from 'dva';
import HomeContainer from '../pages/home';
import BroadcastContainer from '../pages/list';

const { Route, Switch, HashRouter } = router;
const routes = (
  <HashRouter>
    <Switch>
      <Route exact path="/" render={(props) => <HomeContainer {...props} />} />
      <Route path="/broadcast" render={(props) => <BroadcastContainer />} />
    </Switch>
  </HashRouter>
);
export default routes;
