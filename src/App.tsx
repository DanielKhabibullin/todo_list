import 'bootstrap/dist/css/bootstrap.min.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import {Layout} from './Components/Layout/Layout';
import {Todos} from './Components/Pages/Todos/Todos';
import {Users} from './Components/Pages/Users/Users';


const App = () => {
	//TODO id
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />}>
					<Route index element={<Users />} />
					<Route path='todos/:userId' element={<Todos />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />
};

export default App;
