import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux';
import reduxLogger from  'redux-logger';
import rootReducers from './modules/index'

const configureStore = (redusers= {}, preLoadedState = {}, applyMiddlewares = [] ) => createStore(
    combineReducers(
        ...rootReducers,
        ...redusers
        ),
        preLoadedState,
        compose(
            applyMiddleware(
                ...middlewares,
                thunk,
                reduxLogger
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
);

export default configureStore;
