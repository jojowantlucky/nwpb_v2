import React from 'react';
import { Box, Container } from '@mui/material';

import '../style/css/style.css';

import NavAndLogo from './Sections/NavAndLogo/NavAndLogo';
import VideoBackground from './Sections/VideoBackground/VideoBackground';
import Welcome from './Sections/Welcome/Welcome';
import Portfolio from './Sections/Portfolio/Portfolio';
import Testimonial from './Sections/Testimonial/Testimonial_OLD';
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
				<NavAndLogo />
			</Container>

			<Box id='content' className='no-bottom no-top'>
				<div id='top'></div>
				<VideoBackground />
				<Welcome />
				<Portfolio />
				<Testimonial />
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
