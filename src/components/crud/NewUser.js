import React, { useState } from 'react';
import { Wrapper } from './styles/editUser';

// Redux actions.
import { createNewUserActions } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

const NewUser = ({ history }) => {
	// State.
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [website, setWebsite] = useState('');

	// Use dispatch create function
	const dispatch = useDispatch();

	// Access to state of store.
	const loading = useSelector((state) => state.users.loading);
	const error = useSelector((state) => state.users.error);

	// Call action from user.
	const addUser = (user) => dispatch(createNewUserActions(user));

	// When user submi form.
	const handleSubmitNewUser = (e) => {
		e.preventDefault();

		// Validate form.
		if (name.trim() === '' || website.trim() === '' || email.trim() === '') {
			console.log('Error: All fields are required');

			return;
		}

		// Create new user.
		addUser({
			name,
			email,
			website
		});

		// Redirection.
		history.push('/users');
	};
	return (
		<Wrapper>
			<h2>Add New User</h2>

			<form onSubmit={handleSubmitNewUser}>
				<div>
					<label>Name</label>
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div>
					<label>Email</label>
					<input
						type="text"
						placeholder="Email	"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div>
					<label>Website</label>
					<input
						type="text"
						placeholder="Website"
						name="website"
						value={website}
						onChange={(e) => setWebsite(e.target.value)}
					/>
				</div>

				<button type="submit">Add</button>
			</form>
			{loading ? <p>Loading...</p> : null}
			{error ? <p>¡Ups! Something is wrong</p> : null}
		</Wrapper>
	);
};

export default NewUser;
