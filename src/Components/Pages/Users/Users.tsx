import ky from "ky";
import {Table} from 'react-bootstrap';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

interface User {
	id: number;
	name: string;
	email: string;
	address: {
		street: string;
		city: string;
		zipcode: string;
	};
	company: {
		name: string;
	};
}

export const api = ky.create({
		prefixUrl: "https://jsonplaceholder.typicode.com",
	});

export const Users: React.FC = () => {
	const [users, setUsers] = useState<User[]>([]);
	
	useEffect(() => {
		async function getAllUsers() {
			try {
				const response = await api.get('users').json<User[]>();
				setUsers(response);
			} catch (err) {
				console.warn(err);
			}
		}
		getAllUsers();
	}, []);

	return (
		<>
			<h1>Users</h1>
			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th>№</th>
						<th>Name</th>
						<th className="d-none d-md-table-cell">Email</th>
						<th>Adress</th>
						<th className="d-none d-md-table-cell">Company</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<tr key={user.id}>
							<td>{index + 1}</td>
							<td><Link to={`todos/${user.id}`}>{user.name}</Link></td>
							<td className="d-none d-md-table-cell">{user.email}</td>
							<td>{
							`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`
							}</td>
							<td className="d-none d-md-table-cell">{user.company.name}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};
