import { Grid } from '@mui/material';
import React from 'react';
import data from './data.json';
import PricingTableCard from './PricingTableCard';

const PricingTable = () => {
	return (
		<Grid
			spacing={2}
			container
			direction={'row'}
			justifyContent={'center'}
			alignItems={'center'}
			component='section'>
			{data.pkgs.map((pkg, index) => (
				<PricingTableCard key={`pricing-table-card-${index}`} pkg={pkg} index={index} />
			))}
		</Grid>
	);
};

export default PricingTable;
