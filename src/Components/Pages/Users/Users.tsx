import ky from "ky";
import {Table} from 'react-bootstrap';
import {useEffect, useState} from "react";

interface User {
	id: number;
	name: string;
	address: {
		street: string;
		city: string;
		zipcode: string;
	};
	company: {
		name: string;
	};
}

const api = ky.create({
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
						<th>Adress</th>
						<th>Company</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<tr key={user.id}>
							<td>{index + 1}</td>
							<td>{user.name}</td>
							<td>{`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</td>
							<td>{user.company.name}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};
