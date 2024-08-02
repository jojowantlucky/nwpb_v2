import { Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const FunFacts = () => {
	return (
		<Stack
			direction='row'
			id='section-fun-facts'
			className='pt40 pb40 text-light'
			data-bgcolor='#404040'>
			<div className='container'>
				<Grid container spacing={1} direction={'row'} className='row sequence'>
					<Grid item xs={3} className='col-md-3 col-xs-6 sq-item wow'>
						<Stack className='de_count'>
							<Typography variant='h3' className='timer' data-to='8240' data-speed='2500'>
								0
							</Typography>
							<Typography variant='subtitle1' component='span'>
								Hours of Works
							</Typography>
						</Stack>
					</Grid>

					<Grid item xs={3} className='col-md-3 col-xs-6 sq-item wow'>
						<Stack className='de_count'>
							<Typography variant='h3' className='timer' data-to='315'>
								0
							</Typography>
							<Typography variant='subtitle1' component='span'>
								Projects Done
							</Typography>
						</Stack>
					</Grid>

					<Grid item xs={3} className='col-md-3 col-xs-6 sq-item wow' data-wow-delay='.5s'>
						<Stack className='de_count'>
							<Typography variant='h3' className='timer' data-to='250'>
								0
							</Typography>
							<Typography variant='subtitle1' component='span'>
								Satisfied Customers
							</Typography>
						</Stack>
					</Grid>

					<Grid item xs={3} className='col-md-3 col-xs-6 sq-item wow'>
						<Stack className='de_count'>
							<Typography variant='h3' className='timer' data-to='32' data-speed='2500'>
								0
							</Typography>
							<Typography variant='subtitle1' component='span'>
								Awards Winning
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</div>
		</Stack>
	);
};

export default FunFacts;
