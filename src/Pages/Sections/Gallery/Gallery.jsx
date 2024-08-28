import React, { useState } from 'react';
import { Grid } from '@mui/material';
import GalleryNav from './GalleryNav';
import GalleryItems from './GalleryItems';

const Gallery = () => {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const handleCategoryClick = (selection) => {
		setSelectedCategory(selection);
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
			<GalleryNav handleClick={handleCategoryClick} selectedCategory={selectedCategory} />
			<GalleryItems selectedCategory={selectedCategory} />
		</Grid>
	);
};

export default Gallery;
