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
			<div className='de-video-container'>
				<div className='de-video-content'>
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
				</div>

				<Video />
			</div>
		</Box>
	);
};

export default Hero;
