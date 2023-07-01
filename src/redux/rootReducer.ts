import {combineReducers} from 'redux';
import todoReducer from './reducer/todoReducer';

export const RootReducer = combineReducers({
	todo: todoReducer,
});
