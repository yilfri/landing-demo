import React from 'react';
import { useHistory } from 'react-router-dom';

// Redux.
import { useDispatch } from 'react-redux';
import { deleteUserAction, getEditUser } from '../../actions/userActions';

const User = ({ user }) => {
	// Props destructuring
	const { id, name, email, website } = user;

	// Use dispatch create function
	const dispatch = useDispatch();

	// Use History create function
	const history = useHistory();

	// Handle click event - Delete Product.
	const handleDeleteProduct = (id) => {
		dispatch(deleteUserAction(id));
	};

	// Handle click event - Edit Product.
	const handleEditUser = (user) => {
		dispatch(getEditUser(user));
		history.push(`/users/edit/${user.id}`);
	};
	return (
		<tr>
			<td>{id}</td>
			<td>
				<span>{name}</span>
			</td>
			<td>{email}</td>
			<td>{website}</td>
			<td>
				<button type="button" onClick={() => handleEditUser(user)}>
					Edit
				</button>
				<button type="button" onClick={() => handleDeleteProduct(id)}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default User;
