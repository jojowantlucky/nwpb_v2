import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import data from './data.json';

const UpgradeItem = () => {
	return (
		<Paper elevation={10}>
			<Grid container direction={'column'}>
				<Grid item>
					<Typography variant='h3'>Photo Booth Host</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default UpgradeItem;
