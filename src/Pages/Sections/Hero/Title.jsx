import React from 'react';
import { Typography, Grid } from '@mui/material';

const Title = () => {
	return (
		<Grid item className='mask'>
			<Typography
				variant='h2'
				color={'primary.light'}
				fontWeight={'light'}
				fontFamily={'Dosis'}
				letterSpacing='3rem'
				lineHeight={'7rem'}
				className='wow fadeInUp'
				data-wow-delay='1s'
				textAlign={'center'}>
				NOTEWORTHY PHOTO BOOTHS
			</Typography>
		</Grid>
	);
};

export default Title;
