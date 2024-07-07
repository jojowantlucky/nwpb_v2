import React from 'react';
import Nav from './Nav';

const NavAndLogo = () => {
	return (
		<div className='container' sx={{ backgroundSize: 'cover;' }}>
			<div className='row' sx={{ backgroundSize: 'cover;' }}>
				<div className='col-md-12' sx={{ backgroundSize: 'cover;' }}>
					<div id='logo' sx={{ backgroundSize: 'cover;' }}>
						<a href='index.html'>
							<img className='logo' src='images/logo-light.png' alt='' />
							<img className='logo-2' src='images/logo-dark.png' alt='' />
						</a>
					</div>
					<span id='menu-btn'></span>
					<Nav />
				</div>
			</div>
		</div>
	);
};

export default NavAndLogo;
