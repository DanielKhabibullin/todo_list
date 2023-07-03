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
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />}>
				<Route index element={<Users />} />
				<Route path='todos/:userId' element={<Todos />} />
			</Route>
		)
	);

	return (
		<>
			<RouterProvider router={router} />
			<ToastContainer />
		</>
	)
};

export default App;
