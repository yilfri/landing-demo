import React from 'react';
import { Slider, Figure, Image } from './styles/cardSliderStyles';

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
