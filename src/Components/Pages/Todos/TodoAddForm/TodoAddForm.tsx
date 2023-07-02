import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Circles} from "react-loader-spinner";
import {addTodo, AddTodoPayload} from "../../../../redux/action/todoActions";
import {useAppDispatch} from "../../../../redux/hooks";

export const TodoAddForm: React.FC = () => {
	const [title, setTitle] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const {userId} = useParams<{userId?: string}>();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (title.length > 0) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [title]);

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		e.preventDefault();
		if (e.target instanceof HTMLInputElement) {
			setTitle(e.target.value.trimStart());
		}
	};

	const handleAddTodo = async (e: React.FormEvent) => {
		e.preventDefault();
		const payload: AddTodoPayload = {
			userId,
			title,
			completed: false,
	}
		setIsLoading(true);
		await dispatch<any>(addTodo(payload));
		setTitle('');
		setIsLoading(false);
	};

	return (
		<>
			<form onSubmit={handleAddTodo}>
				<div className='d-flex flex-wrap justify-content-center align-items-center'>
					<label className='form-group me-3 mb-3'>
						<input
							onChange={handleChange}
							value={title}
							type='text'
							className='form-control'
							placeholder='Enter new task'
						/>
					</label>
					{isLoading ? (
						<div className='me-3 mb-3'>
							<Circles
								height="38px"
								width="59px"
								color="grey"
								ariaLabel="loading"
							/>
						</div>
					) : (
						<Button
							type='submit'
							disabled={disabled}
							className='me-3 mb-3'
						>
							Save
						</Button>
					)}
					<Button
						variant="warning"
						type='reset'
						disabled={disabled}
						className='me-3 mb-3'
						onClick={() => {
							setTitle('');
						}}
					>
						Clear
					</Button>
				</div>
			</form>
		</>
	);
};
