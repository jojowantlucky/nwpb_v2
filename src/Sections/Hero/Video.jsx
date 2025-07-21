import React, { useEffect, useRef } from 'react';
import video from './nwpb-hero-video.mp4';
import { Grid } from '@mui/material';

const Video = () => {
	const vidRef = useRef();

	useEffect(() => {
		vidRef.current.play();
	}, []);

	return (
		<Grid item xs={12}>
			<div className='de-video-overlay'></div>

			<video
				autoPlay=''
				loop={true}
				ref={vidRef}
				playsInline={true}
				muted={'muted'}
				title='Noteworthy Photo Booths Intro Video'>
				<source src={video} type='video/mp4' />
			</video>
		</Grid>
	);
};

export default Video;
