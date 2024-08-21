import { Button, Grid, IconButton } from '@mui/material';
import React from 'react';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';

const CTAs = () => {
	return (
		<Grid item xs={12}>
			<Grid
				container
				spacing={16}
				direction='row'
				justifyContent='center'
				alignItems='center'
				alignContent='center'
				minWidth={'100vw'}>
				<Grid item>
					<IconButton
						className='pulse'
						color='primary'
						sx={{
							backgroundColor: 'buttonBackgrounds.main',
							borderRadius: '50%',
							padding: '2rem',
							boxShadow: '10',
						}}>
						<CallRoundedIcon sx={{ fontSize: '6rem' }} />
					</IconButton>
				</Grid>
				<Grid item>
					<IconButton
						className='pulse'
						color='primary'
						sx={{
							backgroundColor: 'buttonBackgrounds.secondary',
							padding: '2rem',
							boxShadow: '10',
						}}>
						<RequestQuoteRoundedIcon sx={{ fontSize: '6rem' }} />
					</IconButton>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default CTAs;
