import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas"
import reducers from '../reducers'
import axios from 'axios';
import { isAuth } from './middlewares';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_GATEWAY_URI,
    responseType: 'json'
});

axiosInstance.interceptors.request.use((config: any) => {
    try {
        config.headers.Authorization = 'Bearer token';
        return config;
    }catch(e){

    }
});

export const history = createBrowserHistory();

// preventing pushing same route to history
const prevHistoryPush = history.push;
let lastLocation = history.location;
history.listen(location => {
    lastLocation = location;
});
history.push = (pathname: any, state = {}) => {
    if (
        lastLocation === null ||
        pathname !==
        lastLocation.pathname + lastLocation.search + lastLocation.hash ||
        JSON.stringify(state) !== JSON.stringify(lastLocation.state)
    ) {
        prevHistoryPush(pathname, state);
    }
};
// end preventing pushing same route to history

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
    router: connectRouter(history),
});

export const store = createStore(storeReducers, composer(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof storeReducers>