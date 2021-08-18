import React from 'react';
import CardSlider from './CardSlider';
import { Section, InfoSection, Slider, Whirligig } from './styles/secondSectionStyles';

const SecondSection = () => {
	return (
		<Section>
			<InfoSection>
				<h2>Chose Your Card</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aut aliquam a itaque,
					expedita accusantium molestias sit quae suscipit commodi sequi molestias adipisicing
				</p>
			</InfoSection>

			<Slider>
				<Whirligig>
					<CardSlider />
					<CardSlider />
					<CardSlider />
					<CardSlider />
					<CardSlider />
				</Whirligig>
			</Slider>
		</Section>
	);
};

export default SecondSection;
