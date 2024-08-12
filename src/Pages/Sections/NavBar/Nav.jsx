import React from 'react';
import data from './data.json';
import { Grid, Typography } from '@mui/material';

const Nav = () => {
	return (
		<Grid container direction='row' justifyContent={'space-between'}>
			<Grid item>
				<span id='menu-btn'></span>
			</Grid>
			<Grid item component='nav'>
				<Grid
					spacing={4}
					id='mainmenu'
					container
					direction={'row'}
					justifyContent={'flex-end'}
					alignItems={'center'}>
					{data.items.map((item) => (
						<Grid item>
							<Typography variant='subheader1' color={'grey.200'}>
								{item.label}
							</Typography>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Nav;
