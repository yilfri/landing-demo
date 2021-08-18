import React from 'react';
import Button from './Button';
import { HeadingWrapper } from './styles/headingStyles';

const Heading = () => {
	return (
		<HeadingWrapper>
			<h1>Be Smart Take Card</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aut aliquam a itaque,
				expedita accusantium molestias sit quae suscipit commodi sequi molestias adipisicing
			</p>
			<Button />
		</HeadingWrapper>
	);
};

export default Heading;
