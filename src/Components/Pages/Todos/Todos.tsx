import {useEffect, useState} from "react";
import {Button, Table} from "react-bootstrap";

export const Todos = () => {
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
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>

						<tbody>

						</tbody>
					</Table>
		</>
	);
}
