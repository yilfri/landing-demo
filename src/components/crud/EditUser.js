import React, { useState, useEffect } from 'react';
import { Wrapper } from './styles/editUser';
import { useDispatch, useSelector } from 'react-redux';
import { editUserAction } from '../../actions/userActions';
import { useHistory } from 'react-router-dom';

const EditUser = () => {
	const dispatch = useDispatch();

	const history = useHistory();

	// State of user.
	const [user, setUser] = useState({
		name: '',
		email: '',
		website: ''
	});

	// User to edit.
	const userEdit = useSelector((state) => state.users.userEdit);

	useEffect(() => {
		setUser(userEdit);
	}, [userEdit]);

	const handleChangeUser = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const { name, email, website } = user;

	// User to edit.
	const handleEdit = (e) => {
		e.preventDefault();

		dispatch(editUserAction(user));

		history.push('/users');
	};
	return (
		<Wrapper>
			<h2>Edit User</h2>

			<form onSubmit={handleEdit}>
				<div>
					<label>Name</label>
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={name}
						onChange={handleChangeUser}
					/>
				</div>
				<div>
					<label>Website</label>
					<input
						type="text"
						placeholder="Website"
						name="website"
						value={website}
						onChange={handleChangeUser}
					/>
				</div>
				<div>
					<label>Email</label>
					<input
						type="text"
						placeholder="Email"
						name="email"
						value={email}
						onChange={handleChangeUser}
					/>
				</div>

				<button type="submit">Save Changes</button>
			</form>
		</Wrapper>
	);
};

export default EditUser;
