import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { TypeSpecimenTwoTone } from '@mui/icons-material';

const PricingTable = () => {
	return (
		<Grid
			spacing={4}
			container
			direction={'row'}
			maxWidth={'xl'}
			justifyContent={'center'}
			alignItems={'center'}
			xs={12}
			component='section'
			className='section-pricing-table'>
			<Grid xs={3} item>
				<Paper elevation={2} sx={{ minHeight: '600px', padding: '3rem' }}>
					<Typography color='primary' variant='h5'>
						Package Name 1
					</Typography>
					<Typography variant='subtitle1'>Sub title 1</Typography>
					<Typography variant='subtitle2'>Starting at $899</Typography>

					<Divider variant='middle' sx={{ marginBottom: '1rem' }} />
					<Grid container direction='column'>
						<Grid container spacing={2} direction='row' alignItems={'center'}>
							<Grid xs={2} item>
								<CheckIcon />
							</Grid>
							<Grid xs={10} item>
								<Typography variant='body1'>Bullet Point 1</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Grid>

			<Grid xs={3} minHeight={100} minWidth={50} item>
				<Paper elevation={8} sx={{ minHeight: '600px', padding: '3rem' }}>
					<Typography color='primary' variant='h5'>
						Package Name 2<Typography variant='subtitle1'>Sub title 1</Typography>
					</Typography>
				</Paper>
			</Grid>

			<Grid xs={3} minHeight={100} minWidth={50} item>
				<Paper elevation={2} sx={{ minHeight: '600px', padding: '3rem' }}>
					<Typography color='primary' variant='h5'>
						Package Name 3<Typography variant='subtitle1'>Sub title 1</Typography>
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default PricingTable;
