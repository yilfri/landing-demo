import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	height: 100vh;
	padding: 0 1rem;
	background: linear-gradient(145deg, rgba(61, 111, 226, 1) 0%, rgba(106, 49, 161, 1) 100%);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	position: relative;
`;

export const Wave = styled.img`
	position: absolute;
	width: 100%;
	max-height: 40vh;
	bottom: 0;
	z-index: 1000;
`;
