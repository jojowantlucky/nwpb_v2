import React from 'react';
import { Box, Container } from '@mui/material';

import '../style/css/style.css';
import Hero from './Sections/Hero/Hero';
import NavBar from './Sections/NavBar/NavBar';
import BoothsPrintsBooks from './Sections/BoothsPrintsBooks/BoothsPrintsBooks';
import Gallery from './Sections/Gallery/Gallery';
import BookWithConfidence from './Sections/BookWithConfidence/BookWithConfidence';
import TabsORIG from './Sections/Tabs/TabsORIG';
import TabSection from './Sections/Tabs/TabSection';
import PricingTableOrig from './Sections/PricingTable/PricingTableOrig';
import PricingTable from './Sections/PricingTable/PricingTable';
import FunFacts from './Sections/FunFacts/FunFacts';
import Footer from './Sections/Footer/Footer';
// import Switcher from '../Components/Switcher';
import Preloader from '../Components/Preloader';
import BackToTop from '../Components/BackToTop';

const Home = () => {
	return (
		<>
			<Container className='autoshow transparent' component='header' maxWidth={false}>
				<NavBar />
			</Container>

			<Box id='content' className='no-bottom no-top'>
				<div id='top'></div>
				<Hero />
				<BoothsPrintsBooks />
				<Gallery />
				<BookWithConfidence />
				<TabSection />
				<TabsORIG />
				<PricingTableOrig />
				<PricingTable />
				<FunFacts />
			</Box>
			<Footer />
			<BackToTop />
			<Preloader />
			{/* <Switcher /> */}
		</>
	);
};

export default Home;
