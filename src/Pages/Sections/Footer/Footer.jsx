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
						<Typography variant='h5'>{data.copy.title}</Typography>
						<Box className='tiny-border'>
							<Box component='span'></Box>
						</Box>
						<Typography variant='body'>{data.copy.body}</Typography>
					</div>
				</Grid>
				<Grid item xs={6}>
					<Grid container spacing={2}>
						{data.links.map((item, index) => (
							<Grid key={index} item xs={4}>
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
										{item.links.map((item, index) => (
											<li key={index}>
												<Link underline='hover' variant='subtitle1' color='primary' href={item.url}>
													{item.label}
												</Link>
											</li>
										))}
									</ul>
								</Box>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>

			<Box className='subfooter'>
				<Typography textAlign={'center'} variant='subtitle2' md={12}>
					{data.copy.copyright}
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
