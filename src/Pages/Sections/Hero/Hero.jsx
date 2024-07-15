import React, { useRef, useEffect } from 'react';
import { Grid } from '@mui/material';
import Logo from './Logo';
import Title from './Title';
import Video from './Video';
import CTAs from './CTAs';

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
						xs={8}
						>
						<Logo />
						<Title />
						<CTAs />
					</Grid>
				</div>

				<Video />
			</div>
		</section>
	);
};

export default Hero;
