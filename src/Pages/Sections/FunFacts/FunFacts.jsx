import { Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import data from './data.json';

const FunFacts = () => {
	return (
		<Stack direction='row' id='section-fun-facts' pt={6} pb={10} data-bgcolor='#404040'>
			<div className='container'>
				<Grid container spacing={1} direction={'row'} className='row sequence'>
					{data.items.map((item, index) => (
						<Grid key={index} item xs={6} md={3} className='sq-item wow'>
							<Stack sx={{ textAlign: 'center', padding: '20px 0 20px 0', background: 'none' }}>
								<Typography
									variant='h3'
									className='timer'
									data-to={`${item.quantity}`}
									data-speed='2500'
									color='primary'
									sx={{
										fontFamily: 'Dosis',
										fontSize: '48px',
										letterSpacing: '0px',
										fontWeight: '200',
										marginBottom: '10px',
									}}>
									0
								</Typography>
								<Typography color='secondary' variant='subtitle1' component='span'>
									{item.label}
								</Typography>
							</Stack>
						</Grid>
					))}
				</Grid>
			</div>
		</Stack>
	);
};

export default FunFacts;
