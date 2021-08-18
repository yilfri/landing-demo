import React from 'react';
import styled from 'styled-components';
import UserList from './crud/UserList';
import { Link } from 'react-router-dom';

const Users = () => {
	return (
		<Main>
			<UserList />
			<Link to={'/users/new'}>
				<button>Create User</button>
			</Link>
		</Main>
	);
};

export default Users;

const Main = styled.main`
	background-color: #000;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	button {
		color: #000;
	}
`;
