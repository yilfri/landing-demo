import styled from 'styled-components';

export const CardItem = styled.section`
	flex-basis: 17.5rem;
	transition: 0.3s;

	&:hover {
		box-shadow: rgba(115, 79, 167, 0.5) 0px 5px 15px;
	}
`;

export const CardContent = styled.article`
	width: 90%;
	margin: 0 auto;
`;

export const CardPicture = styled.figure`
	max-width: 3.75rem;
	margin: 1rem auto;
	border-radius: 100%;
	background: #f2f2f2;
	padding: 0.5rem;

	img {
		width: 100%;
	}
`;

export const CardTexts = styled.div`
	* {
		color: var(--font-secundary);
		margin-bottom: 1rem;
		font-size: 0.85rem;
	}
`;
