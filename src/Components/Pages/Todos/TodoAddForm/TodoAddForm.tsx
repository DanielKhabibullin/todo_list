import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";

export const TodoAddForm = () => {
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
					<Button
						type='submit'
						disabled={disabled}
						className='me-3 mb-3'>
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
		</>
	);
};
