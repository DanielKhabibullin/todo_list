import {Nav, Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import logo from './img/logo96.png';
import style from './NavigationBar.module.scss';

export const NavigationBar = () => {
	return (
		<> 
			<Navbar expand="lg" bg="dark" data-bs-theme="dark">
					<NavLink to="/">
						<img src={logo} className={style.nav_logo} alt="logo todo_app" />
					</NavLink>
					<Nav className="me-auto">
						<NavLink className="me-4" to="/">Penguins</NavLink>
						<NavLink className="me-4"to={`todos/:userId`}>ToDo List</NavLink> 
					</Nav>
				</Navbar>
		</>
	)
};
// TODO id