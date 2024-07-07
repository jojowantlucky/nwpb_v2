import React from 'react';
import { Box } from '@mui/material';
import NavMenu from './NavMenu';

const Nav = () => {
	return (
		<Box component='header' className='autoshow' maxWidth={false}>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div id='logo'>
							<a href='index.html'>
								<img className='logo' src='images/logo-light.png' alt='' />
								<img className='logo-2' src='images/logo-dark.png' alt='' />
							</a>
						</div>
						<span id='menu-btn'></span>
						<NavMenu />
					</div>
				</div>
			</div>
		</Box>
	);
};

export default Nav;
