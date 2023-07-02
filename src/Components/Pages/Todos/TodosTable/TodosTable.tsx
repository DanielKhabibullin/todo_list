import {useState} from 'react';
import {Button, Table} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {deleteTodo, updateTodo} from '../../../../redux/action/todoActions';

import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {TodoType} from '../../../../redux/reducer/todoReducer';

export const TodosTable = () => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useAppDispatch();
	const {userId} = useParams<{userId?: string}>();
	const userIdNumber = userId ? parseInt(userId) : undefined;
	console.log(isLoading);
	const {todoList, loading} =
		useAppSelector((state) => state.todo);
	console.log(todoList);
	console.log(loading);

	const handleDeleteTodo = async (todoId: number) => {
		setIsLoading(true);
		await dispatch<any>(deleteTodo(todoId));
		setIsLoading(false);
	};

	const handleEditTodo = async (id: number, title: string, completed: boolean) => {
		const payload: TodoType = {
			id,
			title,
			completed: !completed,
			userId: userIdNumber,
		};
		setIsLoading(true);
		await dispatch<any>(updateTodo(payload));
		setIsLoading(false);
	};

	return (
		<>
			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th>№</th>
						<th>Task</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{todoList.map((todo, index) => (
						<tr
							className={todo.completed ? 'table-success' : 'table-danger'}
							key={todo.id}
						>
							<td>{index + 1}</td>
							<td>{todo.title}</td>
							<td>
								<Button
									className='me-1 mb-1'
									variant='secondary'
									disabled={todo.completed}
									onClick={() => handleEditTodo(todo.id, todo.title, todo.completed)}
								>
									Edit
								</Button>
								<Button
									variant='danger'
									className='me-1 mb-1'
									onClick={() => handleDeleteTodo(todo.id)}
								> Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};
