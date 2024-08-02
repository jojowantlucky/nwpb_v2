import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const FunFacts = () => {
	return (
		<section id='section-fun-facts' className='pt40 pb40 text-light' data-bgcolor='#404040'>
			<div className='container'>
				<Grid container direction={'row'} className='row sequence'>
					<Grid item className='col-md-3 col-xs-6 sq-item wow'>
						<Stack className='de_count'>
							<Typography variant='h3' className='timer' data-to='8240' data-speed='2500'>
								0
							</Typography>
							<Typography variant='subtitle1' component='span'>Hours of Works</Typography>
						</Stack>
					</Grid>

					<Grid item className='col-md-3 col-xs-6 sq-item wow'>
						<div className='de_count'>
							<Typography variant='h3' className='timer' data-to='315'>
								0
							</Typography>
							<span>Projects Done</span>
						</div>
					</Grid>

					<Grid item className='col-md-3 col-xs-6 sq-item wow' data-wow-delay='.5s'>
						<div className='de_count'>
							<Typography variant='h3' className='timer' data-to='250'>
								0
							</Typography>
							<span>Satisfied Customers</span>
						</div>
					</Grid>

					<Grid item className='col-md-3 col-xs-6 sq-item wow'>
						<div className='de_count'>
							<h3 className='timer' data-to='32' data-speed='2500'>
								0
							</h3>
							<span>Awards Winning</span>
						</div>
					</Grid>
				</Grid>
			</div>
		</section>
	);
};

export default FunFacts;
