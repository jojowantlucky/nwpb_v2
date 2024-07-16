import React from 'react';
import { Link, Grid, Typography } from '@mui/material';

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PortraitIcon from '@mui/icons-material/Portrait';

const Welcome = () => {
	const style = {
		position: 'relative',
		width: '100%',
		backgroundSize: 'cover',
		animationDelay: '0s',
		paddingTop: '1rem',
		paddingBottom: '1rem',
		marginTop: '2.5rem',
		marginBottom: '2.5rem',
		overflow: 'hidden',
	};

	const containerStyle = {
		width: '100%',
		paddingRight: '15px',
		paddingLeft: '15px',
		marginRight: 'auto',
		marginLeft: 'auto',
	};

	/*
i {
			position: absolute;
		}

		.text {
			padding-left: 70px;
		}
	*/

	return (
		<Grid
			container
			maxWidth='70vw'
			alignItems='center'
			justifyContent='space-around'
			component='section'
			id='section-welcome'
			m={'auto'}>
			<Grid item xs={3} className='sequence wow fadeInUp animated'>
				<Grid container m={'auto'}>
					<Grid item xs={1} mr={'2rem'}>
						<PhotoCameraIcon color='primary' fontSize='large' />
					</Grid>
					<Grid item xs={9}>
						<Link underline='none' href='#photo-books'>
							<Typography color='secondary' variant='h5'>
								Photo Booths
							</Typography>
						</Link>
						<Typography variant='p'>
							Open air, 360 degree, revolving, selfie station, inflatable, classic, mirror booth,
							and more.
						</Typography>
					</Grid>
				</Grid>
			</Grid>

			<Grid item xs={3} className='sequence wow fadeInUp animated'>
				<Grid container m={'auto'}>
					<Grid item xs={1} mr={'2rem'}>
						<PortraitIcon color='primary' fontSize='large' />
					</Grid>
					<Grid item xs={9}>
						<Link underline='none' href='#custom-prints'>
							<Typography color='secondary' variant='h5'>
								Custom Prints
							</Typography>
						</Link>
						<Typography variant='p'>
							Open air, 360 degree, revolving, selfie station, inflatable, classic, mirror booth,
							and more.
						</Typography>
					</Grid>
				</Grid>
			</Grid>

			<Grid item xs={3} className='sequence wow fadeInUp animated'>
				<Grid container m={'auto'}>
					<Grid item xs={1} mr={'2rem'}>
						<AutoStoriesIcon color='primary' fontSize='large' />
					</Grid>
					<Grid item xs={9}>
						<Link underline='none' href='#photo-books'>
							<Typography color='secondary' variant='h5'>
								Photo Books
							</Typography>
						</Link>

						<Typography variant='p'>
							Open air, 360 degree, revolving, selfie station, inflatable, classic, mirror booth,
							and more.
						</Typography>
					</Grid>
				</Grid>
			</Grid>

			{/* 
			<Grid item xs={4}>
				<Grid container direction='row' maxWidth='60%' className=' sequencewow'>
					<Grid item className='icon'>
						<PortraitIcon fontSize='large' />
					</Grid>
					<Grid item className='text'>
						<Typography variant='h5'>Custom Prints</Typography>
						<Typography variant='p'>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem.
						</Typography>
					</Grid>
				</Grid>
			</Grid>

			<Grid item xs={4}>
				<Grid container direction='row' maxWidth='60%' className='sequence wow'>
					<Grid item className='icon'>
						<AutoStoriesIcon fontSize='large' />
					</Grid>
					<Grid className='text'>
						<Typography variant='h5'>Photo Books</Typography>
						<Typography variant='p'>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem.
						</Typography>
					</Grid>
				</Grid>
			</Grid> */}
		</Grid>
	);
};

export default Welcome;
