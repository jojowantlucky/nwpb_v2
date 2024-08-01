import { Grid, Paper, Stack, Typography, Divider, Button, Container } from '@mui/material';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const PricingTableCard = ({ pkg, index }) => {
	return (
		<Grid key={index} xs={3} item>
			<Paper
				elevation={pkg.featured === 'true' ? 10 : 2}
				sx={{ borderRadius: '10px', minHeight: '500px', overflow: 'hidden' }}>
				<Stack
					spacing={1}
					pb={2}
					pt={'2rem'}
					alignItems={'center'}
					minWidth={'100%'}
					sx={{ backgroundColor: '#cccccc' }}>
					<Stack alignItems={'center'} direction={'row'} spacing={2}>
						<CameraAltIcon />
						<Typography color='primary' variant='h5'>
							{pkg.name}
						</Typography>
					</Stack>
					<Typography variant='subtitle1'>{pkg.subTitle}</Typography>
					<Typography variant='subtitle2'>{pkg.startingAtPrice}</Typography>
				</Stack>
				<Grid padding={'2rem'} mt={0.5} container rowSpacing={2} direction={'row'}>
					{pkg.lines.map((line, index) => (
						<Grid item key={`grid-line-${index}`} xs={12}>
							<Stack direction={'row'} spacing={3}>
								{line.checked === 'checked' ? (
									<CheckIcon color='success' />
								) : (
									<CloseIcon color='error' />
								)}
								<Typography variant='body1'>{line.description}</Typography>
							</Stack>
						</Grid>
					))}
				</Grid>
				<Button sx={{textAlign: 'center'}} variant='contained'>Book Now</Button>
			</Paper>
		</Grid>
	);
};

export default PricingTableCard;
