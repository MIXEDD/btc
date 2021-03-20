import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import createRootReducer from '../reducers';


export const configureStore = () => {
    const mainMiddleware = composeWithDevTools(applyMiddleware(thunkMiddleware));

    return createStore(createRootReducer(), compose(mainMiddleware));
}
