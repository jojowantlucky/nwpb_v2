import React from 'react';
import data from './data.json';
import { Grid, Link, Typography } from '@mui/material';

const Nav = () => {
	return (
		<Grid container direction='row' justifyContent={'space-between'}>
			{/* <Grid item>
				<span id='menu-btn'></span>
			</Grid> */}
			<Grid item component='nav'>
				<Grid
					spacing={4}
					id='mainmenu'
					container
					direction={'row'}
					justifyContent={'flex-end'}
					alignItems={'center'}>
					{data.items.map((item, index) => (
						<Grid key={index} item>
							<Link href={item.url} color='info' underline='none'>
								<Typography variant='subheader1' color={'grey.200'}>
									{item.label}
								</Typography>
							</Link>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Nav;
