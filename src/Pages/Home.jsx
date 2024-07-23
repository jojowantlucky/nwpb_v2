import React from 'react';
import { Box, Container } from '@mui/material';

import '../style/css/style.css';
import Hero from './Sections/Hero/Hero';
import NavBar from './Sections/NavBar/NavBar';
import BoothsPrintsBooks from './Sections/BoothsPrintsBooks/BoothsPrintsBooks';
import Gallery from './Sections/Gallery/Gallery';
import PhotoBooths from './Sections/PhotoBooths/PhotoBooths';
import Process from './Sections/Process/Process';
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
				<PhotoBooths />
				<Process />
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
