import React from 'react';
import Nav from './Nav';
import { Grid, Box } from '@mui/material';

import logo from '../../../images/sections/nav-bar/logo-140x34.png';

const NavBar = () => {
	return (
		<Grid
			container
			alignItems={'center'}
			justifyContent={'space-between'}
			width={'100%'}
			paddingLeft={'6rem'}
			paddingRight={'6rem'}>
			<Grid item>
				<a href='index.html'>
					<Box component='img' sx={{ width: '140px', height: '34px' }} src={logo} />
					{/* <img className='logo' src='images/logo-light.png' alt='' /> */}
					{/* <img className='logo-2' src='images/logo-dark.png' alt='' /> */}
				</a>
			</Grid>
			<Grid item>
				<Nav />
			</Grid>
		</Grid>
	);
};

export default NavBar;
