import React from 'react';
import Nav from './Nav';
import Image from 'material-ui-image';

import logo from '../../../images/sections/nav-bar/logo-140x34.png';

const NavBar = () => {
	return (
		<div className='container' sx={{ backgroundSize: 'cover;' }}>
			<div className='row' sx={{ backgroundSize: 'cover;' }}>
				<div className='col-md-12' sx={{ backgroundSize: 'cover;' }}>
					<div id='logo' sx={{ backgroundSize: 'cover;' }}>
						<a href='index.html'>
							<Image imageStyle={{ width: '140px', height: '34px' }} className='logo' src={logo} />
							{/* <img className='logo' src='images/logo-light.png' alt='' /> */}
							<img className='logo-2' src='images/logo-dark.png' alt='' />
						</a>
					</div>
					<Nav />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
