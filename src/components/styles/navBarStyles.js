import styled from 'styled-components';

export const Container = styled.nav`
	min-height: 60px;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 99998;

	img {
		width: 100%;
		height: 20px;
	}
`;

export const Menu = styled.ol`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	li {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	a {
		font-weight: 600;
		padding: 0 10px;
		flex-wrap: nowrap;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const RightMenu = styled.div`
	display: flex;
	align-items: center;

	a {
		color: white;
		font-weight: 600;
		margin-left: 20px;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const CustomMenu = styled.img`
	cursor: pointer;
	width: 0;

	@media (min-width: 768px) {
		display: none;
	}
`;

export const BurgerNav = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: white;
	width: 300px;
	z-index: 99999;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;
	transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
	transition: transform 0.2s;

	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}

	a {
		font-weight: 700;
		color: var(--font-secundary);
	}
`;

export const CloseWrapper = styled.button`
	display: flex;
	justify-content: flex-end;
	align-self: flex-end;
	align-items: center;
	background-color: var(--font-secundary);
	width: 2rem;
	height: 2rem;
	border: none;
	border-radius: 100%;
`;

export const CustomClose = styled.img`
	width: 1rem;
	height: 1rem;
	cursor: pointer;
`;
