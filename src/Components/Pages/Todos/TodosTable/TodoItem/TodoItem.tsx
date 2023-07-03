import {useEffect, useRef, useState} from "react";
import {Button} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {deleteTodo, updateTodo} from "../../../../../redux/action/todoActions";
import {useAppDispatch} from "../../../../../redux/hooks";
import {TodoType} from "../../../../../redux/reducer/todoReducer";

interface TodoItemProps {
	todo: TodoType;
	index: number;
};

export const TodoItem: React.FC<TodoItemProps> = ({todo, index}) => {

	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useAppDispatch();
	const [isEditing, setIsEditing] = useState(false);
	const [editedText, setEditedText] = useState(todo.title);
	const {userId} = useParams<{userId?: string}>();
	const userIdNumber = userId ? parseInt(userId) : undefined;

	const tdRef = useRef<HTMLTableCellElement>(null);

	const handleDeleteTodo = async (todoId: number) => {
		setIsLoading(true);
		await dispatch<any>(deleteTodo(todoId));
		setIsLoading(false);
	};

	const handleCompleteTodo = async (id: number, title: string, completed: boolean) => {
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

	const editTodo = () => {
		setIsEditing(true);
	};

	const handleEditTodo = async (id: number, title: string, completed: boolean) => {
		if (editedText.trim() === '') {
			console.warn('Task field cannot be empty');
			return;
		}
		const payload: TodoType = {
			id,
			title: editedText,
			completed,
			userId: userIdNumber,
		};
		setIsEditing(false);
		setIsLoading(true);
		await dispatch<any>(updateTodo(payload));
		setIsLoading(false);
	};

		useEffect(() => {
		if (isEditing && tdRef.current) {
			const tdElement = tdRef.current;
			tdElement.focus();
		}
	}, [isEditing]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isEditing &&
				tdRef.current &&
				!tdRef.current.contains(event.target as Node)
			) {
				setIsEditing(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isEditing]);

	return (
		<tr
			className={todo.completed ? 'table-success' : 'table-danger'}
			key={todo.id}
		>
			<td>{index + 1}</td>
			{isEditing ? 
				<td
					ref={tdRef}
					contentEditable={true}
					suppressContentEditableWarning={true}
					onBlur={() => setEditedText(tdRef.current?.innerText || '')}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							e.preventDefault();
							e.currentTarget.blur();
							handleEditTodo(todo.id, todo.title, todo.completed)
						}
					}}
				>
					{editedText}
				</td>
				:
				<td
					className={`${todo.completed ?
						'text-decoration-line-through table-success' : ''}`}
					onDoubleClick={() => setIsEditing(true)}
				>{todo.title}
				</td>
			}
			<td>
				<input
					className="me-1"
					type="checkbox"
					disabled={isLoading}
					defaultChecked={todo.completed}
					onChange={() =>
						handleCompleteTodo(todo.id, todo.title, todo.completed)
					}
				/>
				{!isEditing &&
					<>
						<Button
							variant='primary'
							className='me-1 mb-1'
							onClick={editTodo}
						>
							Edit
						</Button>
						<Button
							variant='danger'
							className='me-1 mb-1'
							onClick={() => handleDeleteTodo(todo.id)}
						>
							Delete
						</Button>
					</>
				}
				{isEditing &&
					<>
						<Button
							variant='success'
							className='me-1 mb-1'
							disabled={isLoading || editedText.trim().length === 0}
							onClick={() => handleEditTodo(todo.id, todo.title, todo.completed)}
						>
							Save
						</Button>
						<Button
							variant='secondary'
							className='me-1 mb-1'
							onClick={() => setIsEditing(false)}
						>
							Cancel
						</Button>
					</>
				}
			</td>
		</tr>
	);
};
