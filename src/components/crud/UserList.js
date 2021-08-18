import React, { useEffect } from 'react';
import User from './User';

//Redux.
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAction } from '../../actions/userActions';

const UserList = () => {
	// Use dispatch create function
	const dispatch = useDispatch();

	// Get data from state of store.
	const users = useSelector((state) => state.users.users);
	const error = useSelector((state) => state.users.error);
	const loading = useSelector((state) => state.users.loading);

	// Get users when website load.
	useEffect(() => {
		const gettingUsers = () => dispatch(getUsersAction());
		gettingUsers();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<h2>User List</h2>
			{error ? <p>Something is wrong</p> : null}

			{loading ? <p>Loading...</p> : null}

			<table>
				<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Website</th>
					</tr>
				</thead>
				<tbody>
					{users.lenght === 0
						? 'No have users'
						: users.map((user) => <User key={user.id} user={user} />)}
				</tbody>
			</table>
		</>
	);
};

export default UserList;
