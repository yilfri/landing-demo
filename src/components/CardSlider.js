import React from 'react';
import styled from 'styled-components';

const CardSlider = () => {
	return (
		<Slider>
			<Figure>
				<Image src="image/credit-card.png" alt="Credit Card" />
			</Figure>
		</Slider>
	);
};

export default CardSlider;

const Slider = styled.div`
	flex: 0 0 auto;
	width: auto;
	margin-left: 1rem;
`;

const Figure = styled.figure`
	width: 100%;
	margin: 0;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	height: 100%;
	border-radius: 10px;
	background: linear-gradient(145deg, rgba(61, 111, 226, 1) 0%, rgba(106, 49, 161, 1) 100%);
`;

const Image = styled.img`
	width: 100%;
`;
