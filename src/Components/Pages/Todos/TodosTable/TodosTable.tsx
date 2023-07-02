import {useState} from 'react';
import {Button, Table} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {deleteTodo} from '../../../../redux/action/todoActions';

import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';

export const TodosTable = () => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useAppDispatch();
	const {userId} = useParams<{userId?: string}>();
	console.log(isLoading);
	console.log(userId);
	const {todoList, loading, lastModified} =
		useAppSelector((state) => state.todo);
	console.log(todoList);
	console.log(loading);
	console.log(lastModified);

	const handleDeleteTodo = async (todoId: number) => {
		setIsLoading(true);
		await dispatch<any>(deleteTodo(todoId));
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
