import {composeWithDevTools} from '@redux-devtools/extension';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import {RootReducer} from './rootReducer';

const middleware = [
	ReduxThunk,
];

const enhancers = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(RootReducer, undefined, enhancers);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
