import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

const logger = createLogger({});
const middlewares = [];

function configureStore() {
  const isDev = process.env.NODE_ENV === 'development';
  if (isDev) {
    middlewares.push(logger);
  }

  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  const store = createStore(
    reducer,
    typeof devToolsExtension === 'function' && isDev
      ? compose(applyMiddleware(...middlewares), devToolsExtension({ name: 'App B', instanceId: 'app_b'}))
      : applyMiddleware(...middlewares)
  );

  return store;
}

export default configureStore();
