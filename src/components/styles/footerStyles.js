import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	display: flex;
	flex-flow: row wrap;
	padding: 50px;
	color: var(--font-secondary);
	background-color: #080217;

	* {
		flex: 1 100%;
	}

	h2 {
		font-weight: 600;
		font-size: 1rem;
	}

	ul {
		list-style: none;
		padding-left: 0;
	}

	li {
		line-height: 2rem;
	}
`;

export const RFooter = styled.ul`
	display: flex;
	flex-flow: row wrap;

	* {
		margin-right: 1.25rem;
	}

	@media screen and (min-width: 600px) {
		* {
			flex: 1;
		}
	}
`;

export const Box = styled.ul`
	a {
		color: var(--font-secondary);
	}
`;

export const Brand = styled.ul`
	padding: 0 2rem;

	img {
		width: 100%;
		max-width: 100px;
		margin-bottom: 1rem;
	}

	p {
		font-size: 0.9rem;
		line-height: 1rem;
	}
`;

export const BFooter = styled.div`
	text-align: center;
	color: var(--font-primary);
	padding-top: 50px;
`;

export const Features = styled.li`
	margin: 2rem 0;

	@media screen and (min-width: 600px) {
		* {
			flex-grow: 2;
		}
	}
`;

export const Form = styled.form`
	height: 2rem;
	outline: none;
	border: none;
	border-radius: 3px;
	margin: 0;

	input {
		padding: 0.5rem 1rem;
	}
`;
