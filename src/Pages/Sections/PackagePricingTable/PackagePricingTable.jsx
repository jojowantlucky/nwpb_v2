import React from 'react';
import {
	Table,
	TableContainer,
	Grid,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Typography,
} from '@mui/material';
import dataRows from './dataRows.json';
/*
Social Booth
Open-air Booth
Enclosed Booth
360 Booth


*/

const columnHeaders = Object.values(dataRows.rows[0]).slice(1);

console.log('columnHeaders: ', columnHeaders);

const PackagePricingTable = () => {
	return (
		// <Grid container spacing={4} direction={'row'} maxWidth={'80vw'}>
		// 	<Grid container item direction={'column'}>
		// 		<Grid item>Grid Column 1</Grid>
		// 		<Grid item>Price</Grid>
		// 		<Grid item>Included Time</Grid>
		// 		<Grid item>Delivery, Setup, & Pickup</Grid>
		// 		<Grid item>Digital Prints</Grid>
		// 		<Grid item>Custom Print Design</Grid>
		// 		<Grid item>Props</Grid>
		// 		<Grid item>DSLR Camera</Grid>
		// 		<Grid item>Photo Booth Host</Grid>
		// 		<Grid item>Instant Print</Grid>
		// 		<Grid item>Additional Hours</Grid>
		// 		<Grid item>Included Mileage</Grid>
		// 	</Grid>
		// 	<Grid container item direction={'column'}>
		// 		<Grid item>Grid Column 2</Grid>
		// 		<Grid item>Price</Grid>
		// 		<Grid item>Included Time</Grid>
		// 		<Grid item>Delivery, Setup, & Pickup</Grid>
		// 		<Grid item>Digital Prints</Grid>
		// 		<Grid item>Custom Print Design</Grid>
		// 		<Grid item>Props</Grid>
		// 		<Grid item>DSLR Camera</Grid>
		// 		<Grid item>Photo Booth Host</Grid>
		// 		<Grid item>Instant Print</Grid>
		// 		<Grid item>Additional Hours</Grid>
		// 		<Grid item>Included Mileage</Grid>{' '}
		// 	</Grid>
		// 	<Grid container item direction={'column'}>
		// 		<Grid item>Grid Column 3</Grid>
		// 		<Grid item>Price</Grid>
		// 		<Grid item>Included Time</Grid>
		// 		<Grid item>Delivery, Setup, & Pickup</Grid>
		// 		<Grid item>Digital Prints</Grid>
		// 		<Grid item>Custom Print Design</Grid>
		// 		<Grid item>Props</Grid>
		// 		<Grid item>DSLR Camera</Grid>
		// 		<Grid item>Photo Booth Host</Grid>
		// 		<Grid item>Instant Print</Grid>
		// 		<Grid item>Additional Hours</Grid>
		// 		<Grid item>Included Mileage</Grid>{' '}
		// 	</Grid>
		// 	<Grid container item direction={'column'}>
		// 		<Grid item>Grid Column 4</Grid>
		// 		<Grid item>Price</Grid>
		// 		<Grid item>Included Time</Grid>
		// 		<Grid item>Delivery, Setup, & Pickup</Grid>
		// 		<Grid item>Digital Prints</Grid>
		// 		<Grid item>Custom Print Design</Grid>
		// 		<Grid item>Props</Grid>
		// 		<Grid item>DSLR Camera</Grid>
		// 		<Grid item>Photo Booth Host</Grid>
		// 		<Grid item>Instant Print</Grid>
		// 		<Grid item>Additional Hours</Grid>
		// 		<Grid item>Included Mileage</Grid>{' '}
		// 	</Grid>
		// </Grid>
		<TableContainer component='paper'>
			<Table sx={{ maxWidth: '60vw', margin: 'auto' }}>
				<TableHead>
					<TableRow>
						{columnHeaders.map((item, index) =>
							index === 0 ? (
								<TableCell key={`header-${index}`}>
									<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
										{item}
									</Typography>
								</TableCell>
							) : (
								<TableCell key={`header-${index}`} align='right'>
									<Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
										{item}
									</Typography>
								</TableCell>
							)
						)}
					</TableRow>
				</TableHead>
				<TableBody>
					{dataRows.rows.slice(1).map((item, index) => (
						<TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component='th'>{item.label}</TableCell>
							<TableCell align='right'>{item.socialBooth}</TableCell>
							<TableCell align='right'>{item.openAir}</TableCell>
							<TableCell align='right'>{item.enclosed}</TableCell>
							<TableCell align='right'>{item.threesixty}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default PackagePricingTable;
