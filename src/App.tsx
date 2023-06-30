import 'bootstrap/dist/css/bootstrap.min.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import {Layout} from './Components/Layout/Layout';
import {Users} from './Components/Pages/Users/Users';


const App = () => {

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
					<Route index element={<Users />} />
					{/* <Route path="todos" element={<Todos />} /> */}
			</Route>
		)
	);

	return <RouterProvider router={router} />
};

export default App;
