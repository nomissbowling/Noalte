import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer';

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`);

  middlewares.push(
    createLogger({
      diff: true,
      collapsed: true,
    }),
  );
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
