import {useEffect, useState} from "react";
import {Button, Table} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {Todo} from "../../../redux/action/todoActions";
import {api} from "../Users/Users";


export const Todos: React.FC = () => {
	const {userId} = useParams<{userId: string}>();
	const [todos, setTodos] = useState<Todo[]>([]);
	const [text, setText] = useState('');
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (text.length > 0) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [text]);

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		e.preventDefault();
		if (e.target instanceof HTMLInputElement) {
			setText(e.target.value.trimStart());
		}
	};


	useEffect(() => {
		async function getAllTodos() {
			try {
				const response = await api
					.get(`todos?userId=${userId}`).json<Todo[]>();
				setTodos(response);
			} catch (err) {
				console.warn(err);
			}
		}
		getAllTodos();
	}, [userId]);


	return (
		<>
				<h1 className='text-center mt-4'>ToDo List</h1>

				<form>
					<div className='d-flex flex-wrap justify-content-center align-items-center'>
						<label className='form-group me-3 mb-3'>
							<input
								onChange={handleChange}
								value={text}
								type='text'
								className='form-control'
								placeholder='Enter new task'
							/>
						</label>
							<Button type='submit' className='me-3 mb-3'>
								Save
							</Button>
							<Button
								variant="warning"
								type='reset'
								disabled={disabled}
								className='me-3 mb-3'
								onClick={() => {
									setText('');
								}}
							>
								Clear
							</Button>
					</div>
				</form>
					<Table striped bordered hover responsive>
						<thead>
							<tr>
								<th>№</th>
								<th>Task</th>
								<th>Completed</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{todos.map((todo, index) => (
								<tr className={todo.completed ? 'table-success' : 'table-light'}key={todo.id}>
									<td>{index + 1}</td>
									<td>{todo.title}</td>
									<td>{todo.completed ? 'Yes' : 'No'}</td>
									<td>
										<Button
											variant="danger"
											type='reset'
											onClick={() => {
												api.delete(`todos/${todo.id}`);
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
}
