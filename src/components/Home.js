import React from 'react';
import Header from './NavBar';
import CreditCard from './CreditCard';
import FirstSection from './FirstSection';
import Heading from './Heading';
import SecondSection from './SecondSection';

import { HeaderWrapper, Wave } from './styles/homeStyles';

const Home = () => {
	return (
		<>
			<HeaderWrapper>
				<Header />
				<Heading />
				<CreditCard />
				<Wave src="image/wave.png" alt="wave" />
			</HeaderWrapper>

			<FirstSection />
			<SecondSection />
		</>
	);
};

export default Home;
