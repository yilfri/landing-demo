import React from 'react';
import Card from './Card';
import { Section, InfoSection, CardWrapper } from './styles/firstSection';

const FirstSection = () => {
	return (
		<Section>
			<InfoSection>
				<h2>Get Your Card</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aut aliquam a itaque,
					expedita accusantium molestias sit quae suscipit commodi sequi molestias adipisicing
				</p>
			</InfoSection>

			<CardWrapper>
				<Card title="Application Online" image="image/cloud.svg" />
				<Card title="Get An Approval" image="image/notes.svg" />
				<Card title="Card Delivery" image="image/card.svg" />
			</CardWrapper>
		</Section>
	);
};

export default FirstSection;
