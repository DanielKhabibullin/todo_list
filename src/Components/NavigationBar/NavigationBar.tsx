import {Nav, Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import logo from './img/logo96.png';
import logoSm from './img/logo32.png';
import style from './NavigationBar.module.scss';

export const NavigationBar = () => {
	return (
		<> 
			<Navbar expand="lg" bg="dark" data-bs-theme="dark">
				<NavLink to="/">
					<img src={logo} className={(style.nav_logo, `ps-4 d-none d-md-block img-fluid`)} alt="logo todo_app" />
					<img src={logoSm} className={(style.nav_logo_sm, `ps-4 d-md-none img-fluid`)} alt="logo todo_app" />

				</NavLink>
				<Nav className="me-auto">
					<NavLink className="ms-4 me-4 mb-2" to="/">Penguins</NavLink>
					<NavLink className="ms-4 me-4" to={`todos/1`}>ToDo List</NavLink> 
				</Nav>
			</Navbar>
		</>
	)
};
