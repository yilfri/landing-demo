import {
	ADD_USER,
	ADD_USER_SUCCESSFUL,
	ADD_USER_ERROR,
	GET_USERS,
	GET_USERS_SUCCESSFUL,
	GET_USERS_ERROR,
	DELETE_USER,
	DELETE_USER_SUCCESSFUL,
	DELETE_USER_ERROR,
	GET_UPDATE_USER,
	UPDATE_USER,
	UPDATE_USER_SUCCESSFUL,
	UPDATE_USER_ERROR
} from '../types';
import clientAxios from '../config/axios';

// Create new Users.
export function createNewUserActions(user) {
	return async (dispatch) => {
		dispatch(addUser());

		try {
			// Add in API
			await clientAxios.post('/Users', user);

			// If all ok, update state.
			dispatch(addUserOk(user));
		} catch (error) {
			// If have error, change status.
			dispatch(addUserError(true));
		}
	};
}

const addUser = () => ({
	type: ADD_USER,
	payload: true
});

// If product has been saved in DB.
const addUserOk = (user) => ({
	type: ADD_USER_SUCCESSFUL,
	payload: user
});

// Else...
const addUserError = (state) => ({
	type: ADD_USER_ERROR,
	payload: state
});

// Get users from DB.
export function getUsersAction() {
	return async (dispatch) => {
		dispatch(getUsers());
		try {
			const response = await clientAxios.get('/users');

			dispatch(getUsersOk(response.data));
		} catch (error) {
			console.log(error);
			dispatch(getUsersError());
		}
	};
}
// Get Users from Db or API.
const getUsers = () => ({
	type: GET_USERS,
	payload: true
});

const getUsersOk = (users) => ({
	type: GET_USERS_SUCCESSFUL,
	payload: users
});

const getUsersError = () => ({
	type: GET_USERS_ERROR,
	payload: true
});

// Delete user from Db.
export function deleteUserAction(id) {
	return async (dispatch) => {
		dispatch(deleteUser(id));

		try {
			await clientAxios.delete(`/users/${id}`);
			dispatch(deleteUserOk());
		} catch (error) {
			console.log(error);
			deleteUserError();
		}
	};
}

const deleteUser = (id) => ({
	type: DELETE_USER,
	payload: id
});

const deleteUserOk = () => ({
	type: DELETE_USER_SUCCESSFUL
});

const deleteUserError = () => ({
	type: DELETE_USER_ERROR,
	payload: true
});

// Set User to edit.
export function getEditUser(user) {
	return (dispatch) => {
		dispatch(getEditUserAction(user));
	};
}

const getEditUserAction = (user) => ({
	type: GET_UPDATE_USER,
	payload: user
});

// Update user in Db.
export function editUserAction(user) {
	return async (dispatch) => {
		dispatch(editUser(user));

		try {
			await clientAxios.put(`/users/${user.id}`, user);
			dispatch(updateUserOk(user));
		} catch (error) {
			console.log(error);
			dispatch(updateUserError());
		}
	};
}

const editUser = () => ({
	type: UPDATE_USER
});

const updateUserOk = (user) => ({
	type: UPDATE_USER_SUCCESSFUL,
	payload: user
});

const updateUserError = () => ({
	type: UPDATE_USER_ERROR
});
