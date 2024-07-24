import React from 'react';
import { Box, Container } from '@mui/material';

import '../style/css/style.css';
import Hero from './Sections/Hero/Hero';
import NavBar from './Sections/NavBar/NavBar';
import BoothsPrintsBooks from './Sections/BoothsPrintsBooks/BoothsPrintsBooks';
import Gallery from './Sections/Gallery/Gallery';
import PhotoBooths from './Sections/PhotoBooths/PhotoBooths';
import Tabs from './Sections/Tabs/Tabs';
import PricingTable from './Sections/PricingTable/PricingTable';
import FunFacts from './Sections/FunFacts/FunFacts';
import Footer from './Sections/Footer/Footer';
// import Switcher from '../Components/Switcher';
import Preloader from '../Components/Preloader';
import BackToTop from '../Components/BackToTop';
import Tabs_NEW from './Sections/Tabs/Tab_NEW';

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
				<PhotoBooths />
				<Tabs />
				<Tabs_NEW />
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
