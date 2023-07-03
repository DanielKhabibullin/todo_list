import {Table} from 'react-bootstrap';
import {Circles} from 'react-loader-spinner';
import {useAppSelector} from '../../../../redux/hooks';
import {TodoType} from '../../../../redux/reducer/todoReducer';
import {TodoItem} from './TodoItem/TodoItem';

export const TodosTable = () => {
	const {todoList, loading} =
	useAppSelector((state) => state.todo);
	console.log(loading);
	return (
		<>
		{loading ? (
				<Circles
					color='#0f7dc6'
					height={200}
					width={200}
				/>
			) : (
			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th>№</th>
						<th>Task</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{todoList.map((todo: TodoType, index) => {
						return (
							<TodoItem key={todo.id} todo={todo} index={index}/>
						);
					})}
				</tbody>
			</Table>
			)}
		</>
	);
};
