import {Table} from 'react-bootstrap';
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {api} from "../../../redux/action/todoActions";
import {Circles} from 'react-loader-spinner';

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
interface UsersState {
	users: User[];
	isLoading: boolean;
}

export class Users extends Component<{}, UsersState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			users: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		this.getAllUsers();
	}

	async getAllUsers() {
		try {
			this.setState({ isLoading: true });
			const response = await api.get('users').json<User[]>();
			this.setState({ users: response, isLoading: false });
		} catch (err) {
			console.warn(err);
			this.setState({ isLoading: false });
		}
	}

	render() {
		const { users, isLoading } = this.state;

		return (
			<>
				<h1>Users</h1>
				{isLoading ? (
					<Circles color="#0f7dc6" height={200} width={200} />
				) : (
					<Table striped bordered hover responsive>
						<thead>
							<tr>
								<th>№</th>
								<th>Name</th>
								<th className="d-none d-md-table-cell">Email</th>
								<th>Address</th>
								<th className="d-none d-md-table-cell">Company</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => (
								<tr key={user.id}>
									<td>{index + 1}</td>
									<td>
										<Link to={`todos/${user.id}`}>{user.name}</Link>
									</td>
									<td className="d-none d-md-table-cell">{user.email}</td>
									<td>
										{`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
									</td>
									<td className="d-none d-md-table-cell">{user.company.name}</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</>
		);
	}
}
