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
						size='large'
						sx={{ backgroundColor: 'primary.light' }}>
						<CallRoundedIcon />
					</IconButton>
				</Grid>
				<Grid item>
					<IconButton
						className='pulse'
						color='secondary'
						size='large'
						sx={{ backgroundColor: 'primary.light' }}>
						<RequestQuoteRoundedIcon />
					</IconButton>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default CTAs;
