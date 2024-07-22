import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { DisabledByDefault } from '@mui/icons-material';

const GalleryNav = ({ handleClick, selectedCategory }) => {
	return (
		<Box pt={10} data-bgcolor='#dddddd'>
			<ul id='filters' className='text-center list-row'>
				<li>
					<Button disabled={selectedCategory === 'all'} variant='text'>
						<Typography variant='p' onClick={() => handleClick('all')}>
							all booths
						</Typography>
						{/* <a href='#' data-filter='*' className='selected'>
							all booths
						</a> */}
					</Button>
				</li>
				<li>
					<Button disabled={selectedCategory === 'open-air'} variant='text'>
						<Typography
							variant='p'
							onClick={() => {
								handleClick('open-air');
							}}>
							open-air booth
						</Typography>

						{/* <a href='#' data-filter='.illustration'>
							open-air booth
						</a> */}
					</Button>
				</li>
				<li>
					<Button disabled={selectedCategory === 'enclosed'} variant='text'>
						<Typography
							variant='p'
							onClick={() => {
								handleClick('enclosed');
							}}>
							enclosed booth
						</Typography>
						{/* <a href='#' data-filter='.mobile'>
							enclosed booth
						</a> */}
					</Button>
				</li>
				<li>
					<Button disabled={selectedCategory === '360'} variant='text'>
						<Typography
							variant='p'
							onClick={() => {
								handleClick('360');
							}}>
							360&deg; booth
						</Typography>
						{/* <a href='#' data-filter='.photography'>
							360&deg; booth
						</a> */}
					</Button>
				</li>
				<li>
					<Button disabled={selectedCategory === 'mirror'} variant='text'>
						<Typography
							variant='p'
							onClick={() => {
								handleClick('mirror');
							}}>
							mirror station
						</Typography>
						{/* <a href='#' data-filter='.website'>
							mirror station
						</a> */}
					</Button>
				</li>
				<li>
					<Button disabled={selectedCategory === 'selfie'} variant='text'>
						<Typography
							variant='p'
							onClick={() => {
								handleClick('selfie');
							}}>
							selfie station
						</Typography>
						{/* <a href='#' data-filter='.selfie-station'>
							selfie station
						</a> */}
					</Button>
				</li>
			</ul>
			<div className='clearfix'></div>
		</Box>
	);
};

export default GalleryNav;
