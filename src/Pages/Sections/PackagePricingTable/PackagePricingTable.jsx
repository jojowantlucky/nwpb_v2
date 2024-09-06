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
	Avatar,
	Stack,
} from '@mui/material';
import data from './data.json';
import placeholder from './150x150-placeholder.webp';
/*
Social Booth
Open-air Booth
Enclosed Booth
360 Booth


*/

const columnHeaders = Object.values(data.tableRows[0]).slice(1);

console.log('columnHeaders: ', columnHeaders);

const PackagePricingTable = () => {
	return (
		<Grid
			container
			spacing={2}
			direction={'column'}
			alignItems={'center'}
			justifyContent={'center'}
			minWidth={'100vw'}>
			<Grid item minWidth={'100vw'} m={'4rem auto'}>
				<Typography variant='h2' color={'primary'} textAlign={'center'}>
					{data.pageCopy.title}
				</Typography>
			</Grid>
			<Grid item minWidth={'100vw'}>
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
											<Stack direction={'column'} spacing={2} alignItems={'center'}>
												<Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
													{item}
												</Typography>
												<Avatar
													sx={{ width: 100 , height: 100}}
													alt='150x150 placeholder'
													src={placeholder}></Avatar>
											</Stack>
										</TableCell>
									)
								)}
							</TableRow>
						</TableHead>
						<TableBody>
							{data.tableRows.slice(1).map((item, index) => (
								<TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell component='th'>{item.label}</TableCell>
									<TableCell align='center'>{item.socialBooth}</TableCell>
									<TableCell align='center'>{item.openAir}</TableCell>
									<TableCell align='center'>{item.enclosed}</TableCell>
									<TableCell align='center'>{item.threesixty}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</Grid>
	);
};

export default PackagePricingTable;
