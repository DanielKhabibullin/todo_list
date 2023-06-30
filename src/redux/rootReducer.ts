import {combineReducers} from 'redux';
import todoReducer from './reducer/todoReducer';

const RootReducer = combineReducers({
	todo: todoReducer,
});

export default RootReducer;
