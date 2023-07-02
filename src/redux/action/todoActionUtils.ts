import {TodoType} from '../reducer/todoReducer';

export const deleteTodoById = (todoList: TodoType[], id: number) => {
	const indexToDelete = todoList.findIndex((item) => item.id === id);
	if (indexToDelete > -1) {
		todoList.splice(indexToDelete, 1);
		console.warn('Item deleted');
	}
	return todoList;
};

export const updateTodoItem = (todoList: TodoType[], payload: TodoType) => {
	const indexToUpdate = todoList.findIndex((item) => item.id === payload.id);
	if (indexToUpdate > -1) {
		todoList[indexToUpdate] = payload;
		console.warn('Item updated');
	}
	return todoList;
};
