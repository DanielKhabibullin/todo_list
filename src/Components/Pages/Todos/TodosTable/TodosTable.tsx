import {Button, Table} from "react-bootstrap";
import {useAppSelector} from "../../../../redux/hooks";

export const TodosTable = () => {
	const {todoList, loading, lastModified} = useAppSelector(
		(state) => state.todo
	);
	console.log(todoList);
	console.log(loading);
	console.log(lastModified);
	return (
		<>
			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th>№</th>
						<th>Task</th>
						<th className="d-none d-md-table-cell">Completed</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{todoList.map((todo, index) => (
						<tr
							className={todo.completed ? 'table-success' : 'table-light'}
							key={todo.id}
						>
							<td>{index + 1}</td>
							<td>{todo.title}</td>
							<td className="d-none d-md-table-cell">{todo.completed ? 'Yes' : 'No'}</td>
							<td>
								<Button
									variant="danger"
									type='reset'
									onClick={() => {
										console.log(`api.delete(todos/${todo.id}`);
									}}
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