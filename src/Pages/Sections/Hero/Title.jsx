import React from 'react';
import { Typography, Grid } from '@mui/material';

const Title = () => {
	return (
		<>
			{/* <div className='spacer-single'></div>
			<div className='spacer-double'></div>
			<div className='spacer-double'></div>
			<div className='spacer-double'></div> */}
			<Grid item className='mask' xs={12} textAlign={'center'} minWidth={'80vw'}>
				<Typography
					variant='h2'
					color={'primary.light'}
					fontWeight={'light'}
					fontFamily={'Dosis'}
					letterSpacing='3rem'
					
					lineHeight={'7rem'}
					className='wow fadeInUp'
					data-wow-delay='1s'>
					NOTEWORTHY PHOTO BOOTHS
				</Typography>
			</Grid>
			{/* <div className='spacer-single'></div>
			<div className='spacer-double'></div>
			<div className='spacer-double'></div>
			<div className='spacer-double'></div>
			<div className='spacer-double'></div> */}
		</>
	);
};

export default Title;
