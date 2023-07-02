import ky from 'ky';
import {Dispatch} from 'redux';
import {TodoType} from '../reducer/todoReducer';
import {
	ADD_TODO_SUCCESS,
	DELETE_TODO_SUCCESS,
	FETCH_TODO_SUCCESS,
	LOADING_END,
	LOADING_START,
	TodoDispatchType,
	UPDATE_TODO_SUCCESS,
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

export const deleteTodo = (id: number) =>
	async (dispatch: Dispatch<TodoDispatchType>): Promise<void> => {
		try {
			const response = await api.delete(`todos/${id}`).json();
			if (response) {
				dispatch({type: DELETE_TODO_SUCCESS, id});
			}
		} catch (err) {
			console.warn(err);
		}
};

export const updateTodo = (payload: TodoType) =>
async (dispatch: Dispatch<TodoDispatchType>): Promise<void> => {
		try {
			const response = await api.put(`todos/${payload.id}`, {json: payload}).json();
			if (response) {
				dispatch({type: UPDATE_TODO_SUCCESS, payload});
			}
		} catch (err) {
			console.warn(err);
		}
};
