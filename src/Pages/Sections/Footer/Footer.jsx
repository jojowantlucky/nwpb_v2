import { Typography, Box, Grid, Link } from '@mui/material';
import React from 'react';
import data from './data.json';

const Footer = () => {
	return (
		<Box component='footer'>
			<Grid
				container
				direction='row'
				alignItems={'center'}
				justifyContent={'space-between'}
				className='container'
				maxWidth={'80vw'}>
				<Grid item xs={4}>
					<div className='widget'>
						<Typography variant='h5'>About Noteworthy Photo Booths</Typography>
						<Box className='tiny-border'>
							<Box component='span'></Box>
						</Box>
						<Typography variant='body'>
							Noteworthy Photo Booths combines state of the art equipment, super fun props, prints,
							and engaging hosts to add a whole extra layer of awesome to any event. We have several
							types of booths available and packages to fit any budget.
						</Typography>
					</div>
				</Grid>
				<Grid item xs={6}>
					<Grid container spacing={2} disableGutters>
						{data.footerLinks.map((item) => (
							<Grid item xs={4}>
								<Box
									sx={{ border: 'none', marginBottom: '0', paddingBottom: '30px' }}
									className='widget'>
									<Typography variant='h5'>{item.category}</Typography>
									<Box
										className=''
										sx={{
											height: '1px',
											background: '#fff',
											width: '100%',
											margin: '20px 0 20px 0',
											display: 'block',
										}}>
										<Box
											component='span'
											sx={{
												backgroundColor: '#ff3a7c',
												display: 'block',
												height: '1px',
												width: '30px',
											}}></Box>
									</Box>
									<ul>
										{item.links.map((item) => (
											<li>
												<Link underline='hover' variant='subtitle1' color='primary' href={item.url}>
													{item.label}
												</Link>
											</li>
										))}
									</ul>
								</Box>
							</Grid>
						))}

						{/* <Grid item xs={4}>
							<Box>
								<div className='widget'>
									<Typography variant='h5'>Services</Typography>
									<div className='tiny-border'>
										<span></span>
									</div>
									<ul>
										<li>
											<a href='#'>Web Design</a>
										</li>
										<li>
											<a href='#'>Development</a>
										</li>
										<li>
											<a href='#'>Animation</a>
										</li>
										<li>
											<a href='#'>Mobile Apps</a>
										</li>
										<li>
											<a href='#'>Campaign</a>
										</li>
									</ul>
								</div>
							</Box>
						</Grid>
						<Grid item xs={4}>
							<div>
								<div className='widget'>
									<Typography variant='h5'>Help &amp; Support</Typography>
									<div className='tiny-border'>
										<span></span>
									</div>
									<ul>
										<li>
											<a href='#'>Help Center</a>
										</li>
										<li>
											<a href='#'>Contact Us</a>
										</li>
										<li>
											<a href='#'>Live Chat</a>
										</li>
										<li>
											<a href='#'>Terms of Services</a>
										</li>
										<li>
											<a href='#'>Privacy Policy</a>
										</li>
									</ul>
								</div>
							</div>
						</Grid> */}
					</Grid>
				</Grid>
			</Grid>

			<Box className='subfooter'>
				<Typography textAlign={'center'} variant='subtitle2' md={12}>
					&copy; Copyright 2024 - Noteworthy Productions, LLC
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
