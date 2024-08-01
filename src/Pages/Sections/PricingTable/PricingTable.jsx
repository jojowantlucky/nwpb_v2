import { Box, Button, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { TypeSpecimenTwoTone } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import data from './data.json';
// const data = [
// 	{
// 		id: 'pacakge01',
// 		featured: 'false',
// 		name: 'Package Name 1',
// 		subTitle: 'Sub title 1',
// 		startingAtPrice: '$899',
// 		line: {
// 			one: {
// 				checked: 'checked',
// 				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, harum?',
// 			},
// 			two: {
// 				checked: 'checked',
// 				description: 'Lorem ipsum dolor sit amet',
// 			},
// 			three: {
// 				checked: 'checked',
// 				description: 'consectetur adipisicing elit. Voluptates, harum?',
// 			},
// 			four: {
// 				checked: 'unchecked',
// 				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
// 			},
// 			five: {
// 				checked: 'unchecked',
// 				description: 'Lorem, ipsum dolor.',
// 			},
// 			six: {
// 				checked: 'checked',
// 				description: 'Lorem, ipsum dolor adipisicing elit.',
// 			},
// 		},
// 	},
// 	{
// 		id: 'pacakge02',
// 		featured: 'true',
// 		name: 'Package Name 2',
// 		subTitle: 'Sub title 2',
// 		startingAtPrice: '$999',
// 		line: {
// 			1: {
// 				checked: 'checked',
// 				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, harum?',
// 			},
// 			2: {
// 				checked: 'checked',
// 				description: 'Lorem ipsum dolor sit amet',
// 			},
// 			3: {
// 				checked: 'checked',
// 				description: 'consectetur adipisicing elit. Voluptates, harum?',
// 			},
// 			4: {
// 				checked: 'checked',
// 				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
// 			},
// 			5: {
// 				checked: 'unchecked',
// 				description: 'Lorem, ipsum dolor.',
// 			},
// 		},
// 	},
// 	{
// 		id: 'package03',
// 		featured: 'false',
// 		name: 'Package Name 3',
// 		subTitle: 'Sub title 3',
// 		startingAtPrice: '$1,099',
// 		line: {
// 			1: {
// 				checked: 'checked',
// 				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, harum?',
// 			},
// 			2: {
// 				checked: 'checked',
// 				description: 'Lorem ipsum dolor sit amet',
// 			},
// 			3: {
// 				checked: 'checked',
// 				description: 'consectetur adipisicing elit. Voluptates, harum?',
// 			},
// 			4: {
// 				checked: 'checked',
// 				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
// 			},
// 			5: {
// 				checked: 'checked',
// 				description: 'Lorem, ipsum dolor.',
// 			},
// 		},
// 	},
// ];

// console.log('is this working? ', data.pkgs[0].line.one);

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
			{data.pkgs.map((pkg, index) => (
				<Grid key={index} xs={3} item>
					<Paper elevation={2} sx={{ borderRadius: '10px', minHeight: '500px', padding: '3rem' }}>
						<Stack spacing={1} pb={2} alignItems={'center'}>
							<Typography color='primary' variant='h5'>
								{pkg.name}
							</Typography>
							<Typography variant='subtitle1'>{pkg.subTitle}</Typography>
							<Typography variant='subtitle2'>{pkg.startingAtPrice}</Typography>
						</Stack>
						<Divider variant='middle' sx={{ marginBottom: '1rem' }} />
						<Grid mt={0.5} container spacing={2} direction='row' alignItems={'center'}>
							{pkg.lines.map((line, index) => (
								<div key={index}>
									<Grid xs={1} item>
										{line.checked === 'checked' ? (
											<CheckCircleIcon color='success' />
										) : (
											<CancelIcon color='error' />
										)}
									</Grid>
									<Grid xs={11} item>
										<Typography variant='body1'>{line.description}</Typography>
									</Grid>
								</div>
							))}
							{/* 
							<Grid xs={1} item>
								<CheckCircleIcon color='success' />
							</Grid>
							<Grid xs={11} item>
								<Typography variant='body1'>hi</Typography>
							</Grid>

							<Grid xs={1} item>
								<CheckCircleIcon color='success' />
							</Grid>
							<Grid xs={11} item>
								<Typography variant='body1'>hi</Typography>
							</Grid>
							<Grid xs={1} item>
								<CheckCircleIcon color='success' />
							</Grid>
							<Grid xs={11} item>
								<Typography variant='body1'>hi</Typography>
							</Grid>
							<Grid xs={1} item>
								<CancelIcon color='error' />
							</Grid>
							<Grid xs={11} item>
								<Typography variant='body1'>{pkg.name}</Typography>
							</Grid>
							<Grid xs={1} item>
								<CheckCircleIcon color='success' />
							</Grid>
							<Grid xs={11} item>
								<Typography variant='body1'>{pkg.name}</Typography>
							</Grid>
							<Grid xs={1} item>
								<CheckCircleIcon color='success' />
							</Grid>
							<Grid xs={11} item>
								<Typography variant='body1'>{pkg.name}</Typography>
							</Grid>
							<Grid xs={1} item>
								<CancelIcon color='error' />
							</Grid>
							<Grid xs={11} item>
								<Typography variant='body1'>{pkg.name}</Typography>
							</Grid> */}
							<Grid alignItems={'center'} item xs={5}>
								<Button variant='contained'>Book Now</Button>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			))}
		</Grid>
	);
};

export default PricingTable;
