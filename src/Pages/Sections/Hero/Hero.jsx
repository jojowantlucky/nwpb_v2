import React from 'react';
import { Grid, Box } from '@mui/material';
import Logo from './Logo';
import Title from './Title';
import Video from './Video';
import CTAs from './CTAs';

const Hero = () => {
	return (
		<Box
			component='section'
			id='hero'
			data-speed='5'
			data-type='background'
			sx={{ padding: '0 !important', overflow: 'hidden' }}>
			<Box>
				<Box sx={{ width: '100%', position: 'absolute', zIndex: '10', marginTop: '0 !important' }}>
					<Grid
						container
						direction='column'
						pt={'4rem'}
						m={'auto'}
						alignContent='center'
						alignItems='center'
						spacing={8}>
						<Logo />
						<Title />
						<CTAs />
					</Grid>
				</Box>

				<Video />
			</Box>
		</Box>
	);
};

export default Hero;
