import React from 'react';
import Image from 'material-ui-image';
import logo from '../../../images/sections/hero/logo-300x300.png';
import { Grid } from '@mui/material';

const Logo = () => {
	return (
		<Grid item>
			<Image
				src={logo}
				style={{
					color: 'white',
					width: '250px',
					height: '250px',
					marginTop: '10rem',
					margin: 'auto',
					background: 'transparent',
				}}
				sx={{ className: 'fadeIn' }}
			/>
			{/* <img className='logo' src='images/logo-2.png' alt='' /> */}
		</Grid>
	);
};

export default Logo;
