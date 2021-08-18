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

export const CardWrapper = styled.div`
	width: 100%;
	padding: 3.75rem 0;
	max-width: 1200px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	gap: 1rem;
	flex-wrap: wrap;
`;
