import {Container} from "react-bootstrap"
import {Outlet} from "react-router-dom"
import {NavigationBar} from "../NavigationBar/NavigationBar"

export const Layout = () => {
	return (
		<>
			<NavigationBar />
			<Container className="w-100 d-flex align-items-center justify-content-center flex-column pb-lg-5">
				<Outlet />
			</Container>
		</>
	);
};
