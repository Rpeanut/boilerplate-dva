import React from 'react';
import ReactDOM from 'react-dom';
import dva, { routerRedux } from 'dva';
import { createHashHistory } from 'history';
import { createLogger } from 'redux-logger';
import router from './routers';
import createModelFactory from './models';
import './assets/index.less';

const { ConnectedRouter } = routerRedux;
const history = createHashHistory();
const dvaOpts = { history };
if (process.env.NODE_ENV === 'development') {
  dvaOpts.onAction = createLogger({
    level: 'info',
    duration: true,
    collapsed: true
  });
}
const app = dva(dvaOpts);
createModelFactory(app);
function DvaContainer(props) {
  app.router(() => props.children);
  return app.start()();
}
function render() {
  ReactDOM.render(
    <DvaContainer>
      <ConnectedRouter history={history}>{router}</ConnectedRouter>
    </DvaContainer>,
    document.getElementById('root')
  );
}
render();

// hot module replacement
if (module.hot) {
  module.hot.accept('./routers', () => {
    render();
  });
}
