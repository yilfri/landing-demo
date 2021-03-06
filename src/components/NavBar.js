import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Container,
	Menu,
	RightMenu,
	CustomMenu,
	BurgerNav,
	CloseWrapper,
	CustomClose
} from './styles/navBarStyles';

const NavBar = () => {
	const [burgerStatus, setBurgerStatus] = useState(false);

	return (
		<Container>
			<Link to={'/'}>
				<img src="/image/visa.svg" alt="Visa" />
			</Link>

			<Menu>
				<li>
					<a href="!#">Products</a>
				</li>
				<li>
					<Link to={'/users'}>Users</Link>
				</li>
				<li>
					<a href="!#">Company</a>
				</li>
			</Menu>

			<RightMenu>
				<a href="!#">Users</a>
				<a href="!#">Sign in &#8594;</a>
			</RightMenu>

			<a href="#!">
				<CustomMenu onClick={() => setBurgerStatus(true)} src="/image/menu.svg" alt="menu" />
			</a>

			<BurgerNav show={burgerStatus}>
				<CloseWrapper>
					<CustomClose
						onClick={() => setBurgerStatus(false)}
						src="/image/close.svg"
						alt="Close menu"
					/>
				</CloseWrapper>

				<div>
					<li>
						<a href="!#">Products</a>
					</li>
					<li>
						<Link to={'/users'}>Users</Link>
					</li>
					<li>
						<a href="!#">Company</a>
					</li>
					<li>
						<a href="!#">Users</a>
					</li>
					<li>
						<a href="!#">Sign In</a>
					</li>
				</div>
			</BurgerNav>
		</Container>
	);
};

export default NavBar;
