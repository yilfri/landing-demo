import styled from 'styled-components';

export const Section = styled.section`
	width: 100%;
	background-color: white;
	padding: 1rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const InfoSection = styled.div`
	max-width: 40.625rem;

	h2 {
		color: var(--font-secundary);
		font-size: 2rem;
		margin-bottom: 2rem;
	}

	p {
		color: var(--font-secundary);
		line-height: 1.5rem;
	}
`;

export const Slider = styled.div`
	padding-top: 12px;
	text-align: center;
	width: 100%;
	padding-bottom: 4em;
	position: relative;
	padding: 3.75rem 0;
`;

export const Wheel = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	overflow-x: auto;
	position: relative;
	outline: none;
`;
