import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import produceReducer from "./produce";

const rootReducer = combineReducers({
    produce: produceReducer
});

let enhancer = null;

if (process.env.NODE_ENV !== 'production') {
    const logger = require('redux-logger').default;
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
}

export default configureStore;
