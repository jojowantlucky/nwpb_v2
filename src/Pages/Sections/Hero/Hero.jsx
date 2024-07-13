import React, { useRef, useEffect } from 'react';
import Logo from './Logo';
import Title from './Title';
import Video from './Video';
import { Grid } from '@mui/material';

const Hero = () => {
	return (
		<section
			id='hero'
			className='full-height no-padding text-light'
			data-speed='5'
			data-type='background'>
			<div className='de-video-container'>
				<div className='de-video-content'>
					<Grid
						container
						direction='column'
						pt={'4rem'}
						m={'auto'}
						alignContent='center'
						alignItems='center'
						spacing={8}
						maxWidth={12}>
						<Logo />
						<Title />
					</Grid>
				</div>

				<Video />
			</div>
		</section>
	);
};

export default Hero;
