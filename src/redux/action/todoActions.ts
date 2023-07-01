import ky from 'ky';
import {Dispatch} from 'redux';
import {
	ADD_TODO_SUCCESS,
	FETCH_TODO_SUCCESS,
	LOADING_END,
	LOADING_START,
	TodoDispatchType,
} from './todoActionTypes';

export const api = ky.create({
		prefixUrl: "https://jsonplaceholder.typicode.com",
	});

export interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

export interface AddTodoPayload {
	userId: string | undefined;
	title: string;
	completed: boolean;
};

export const getAllTodos = (userId: string) =>
	async (dispatch: Dispatch<TodoDispatchType>): Promise<void> => {
		dispatch({type: LOADING_START});

		try {
			const response = await api.get(`todos?userId=${userId}`).json<Todo[]>();
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

export const addTodo = (payload: AddTodoPayload) =>
	async (dispatch: Dispatch<TodoDispatchType>): Promise<void> => {
		try {
			const response = await api.post('todos',
				{json: payload}).json<Todo>();
			if (response) {
				console.log('New item added');
				dispatch({
					type: ADD_TODO_SUCCESS,
					payload: response,
				});
			}
		} catch (err) {
			console.warn(err);
		}
	};
