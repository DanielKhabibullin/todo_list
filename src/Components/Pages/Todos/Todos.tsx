import {useEffect} from 'react';
import {Badge} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {getAllTodos} from '../../../redux/action/todoActions';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {TodoAddForm} from './TodoAddForm/TodoAddForm';
import {TodosTable} from './TodosTable/TodosTable';

export const Todos: React.FC = () => {
	const {userId} = useParams<{userId?: string}>();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch<any>(getAllTodos(userId || ''));
	}, [dispatch, userId]);

	const {todoList} =
	useAppSelector((state) => state.todo);
	const completedCount = todoList.filter((todo) => todo.completed).length;
	const unfinishedCount = todoList.filter((todo) => !todo.completed).length;

	return (
		<>
			<div className='mb-3 text-end align-self-end'>
				<h3>Penguin: {userId}</h3>
				<Badge bg="success">{completedCount} Completed</Badge>{" "}
				<Badge bg="danger">{unfinishedCount} Unfinished</Badge>
			</div>
				<h1 className='text-center mt-4'>ToDo List</h1>
				<TodoAddForm />
				<TodosTable />
		</>
	);
}
