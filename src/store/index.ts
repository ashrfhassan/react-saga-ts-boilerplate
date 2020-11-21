import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history/'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas"
import reducers from '../reducers'
import { isAuth } from './middlewares';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export const history = createBrowserHistory();

const historyMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware()

let composer;
let middleware = [sagaMiddleware, isAuth, historyMiddleware];
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    middleware.push(logger);
} else {
    composer = compose; // add support for Redux dev tools
}

const storeReducers = combineReducers({
    ...reducers,
    routing: routerReducer,
});

export const store = createStore(storeReducers, composer(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof storeReducers>