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
	UPDATE_USER_SUCCESSFUL,
	UPDATE_USER_ERROR
} from '../types';

const initialState = {
	users: [],
	error: null,
	loading: false,
	userDelete: null,
	userEdit: null
};

// eslint-disable-next-line
export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_USER:
		case GET_USERS:
			return {
				...state,
				loading: action.payload
			};
		case ADD_USER_SUCCESSFUL:
			return {
				...state,
				loading: false,
				users: [...state.users, action.payload]
			};
		case ADD_USER_ERROR:
		case GET_USERS_ERROR:
		case DELETE_USER_ERROR:
		case UPDATE_USER_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		case GET_USERS_SUCCESSFUL:
			return {
				...state,
				loading: false,
				error: null,
				users: action.payload
			};
		case DELETE_USER:
			return {
				...state,
				userDelete: action.payload
			};
		case DELETE_USER_SUCCESSFUL:
			return {
				...state,
				users: state.users.filter((user) => user.id !== state.userDelete),
				userDelete: null
			};
		case GET_UPDATE_USER:
			return {
				...state,
				userEdit: action.payload
			};
		case UPDATE_USER_SUCCESSFUL:
			return {
				...state,
				userEdit: null,
				users: state.users.map((user) =>
					user.id === action.payload.id ? (user = action.payload) : user
				)
			};
		default:
			return state;
	}
}
