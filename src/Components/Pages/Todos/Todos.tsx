import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getAllTodos} from '../../../redux/action/todoActions';
import {useAppDispatch} from '../../../redux/hooks';
import {TodoAddForm} from './TodoAddForm/TodoAddForm';
import {TodosTable} from './TodosTable/TodosTable';

export const Todos: React.FC = () => {
	const {userId} = useParams<{userId?: string}>();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch<any>(getAllTodos(userId || ''));
	}, [dispatch, userId]);

	return (
		<>
				<h1 className='text-center mt-4'>ToDo List</h1>
				<TodoAddForm />
				<TodosTable />
		</>
	);
}
