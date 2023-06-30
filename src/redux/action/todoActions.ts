import ky from 'ky';
import {Dispatch} from 'redux';
import {
	FETCH_TODO_SUCCESS,
	LOADING_END,
	LOADING_START,
	TodoDispatchType,
} from './todoActionTypes';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export const getAllTodos = (userId: number) =>
	async (dispatch: Dispatch<TodoDispatchType>) => {
		dispatch({type: LOADING_START});

		try {
			const response = await ky.get(`${API_BASE_URL}?userId=${userId}`).json<Todo[]>();
			console.log(response);
			if (response) {
				console.log('Data fetched successfully');
				dispatch({
					type: FETCH_TODO_SUCCESS,
					payload: response,
				});

				dispatch({type: LOADING_END});
			}
		} catch (err) {
			console.warn(err);
			dispatch({type: LOADING_END});
		}
	};


