import React from 'react';
import { CardItem, CardContent, CardPicture, CardTexts } from './styles/cardStyle';

const Card = ({ title, image }) => {
	return (
		<CardItem>
			<CardContent>
				<CardPicture>
					<img src={image} alt="Steps" />
				</CardPicture>

				<CardTexts>
					<h3>{title}</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id autem obcaecati!
						Atque tempore accusantium qucoia.
					</p>
				</CardTexts>
			</CardContent>
		</CardItem>
	);
};

export default Card;
