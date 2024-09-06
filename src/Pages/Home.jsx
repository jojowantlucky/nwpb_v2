import React from 'react';
import { Box, Container, Grid } from '@mui/material';

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
import PackagePricingTable from './Sections/PackagePricingTable/PackagePricingTable';

const Home = () => {
	return (
		<Container
			maxWidth={'100vw'}
			sx={{ paddingLeft: '0 !important', paddingRight: '0 !important' }}>
			<Grid container className='autoshow transparent' component='header' maxWidth={'100vw'}>
				<NavBar />
			</Grid>
			<Grid
				container
				id='content'
				sx={{ marginTop: '0', marginBottom: '0', paddingTop: '0 !important', paddingBottom: '0' }}
				className=''
				display={'flex'}
				maxWidth={'100vw'}>
				<div id='top'></div>
				<Hero />
				<BoothsPrintsBooks />
				<Gallery />
				<BookWithConfidence />
				<TabSection />
				{/* <PricingTable /> */}
				<PackagePricingTable />
				<FunFacts />
				<Footer />
				{/* <BackToTop /> */}
				{/* <Preloader /> */}
			</Grid>
			{/* <Switcher /> */}
		</Container>
	);
};

export default Home;
