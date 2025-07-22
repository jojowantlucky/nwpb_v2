import React, { useState } from 'react';
import { Grid } from '@mui/material';
import GalleryNav from './GalleryNav';
import GalleryItem from './GalleryItem';
import galleryItems from './galleryItems.json';

const filterSelection = (selection) => {
	//filter selection here
	return;
};

const Gallery = () => {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const handleCategoryClick = (selection) => {
		setSelectedCategory(selection);
		console.log('Selected Category: ', selection);
	};

	return (
		<Grid
			component='section'
			item
			sx={{ width: '100vw', backgroundColor: 'rgb(248,248,248' }}
			id='section-gallery'
			p={0}
			m={0}
			aria-label='section-portfolio'
			data-bgcolor='#f8f8f8'>
			<GalleryNav handleClick={handleCategoryClick} />
			<div
				id='gallery'
				className='gallery full-gallery de-gallery pf_full_width pf_3_cols sequence'>
				<GalleryItem galleryItems={galleryItems}  />
			</div>
		</Grid>
	);
};

export default Gallery;
