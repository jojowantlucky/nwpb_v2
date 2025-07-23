import React, { useState } from 'react';
import { Grid } from '@mui/material';
import GalleryNav from './GalleryNav';
import GalleryItem from './GalleryItem';
import allGalleryImages from './allGalleryImages.json';

console.log(allGalleryImages);
const Gallery = () => {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [galleryItems, setGalleryItems] = useState(allGalleryImages);
	const handleCategoryClick = (selection) => {
		setSelectedCategory(selection);
		setGalleryItems(allGalleryImages.category.includes(selectedCategory));
	};

	const filterBySelection = (selection) => {
		if (selection.category.includes(selectedCategory)) {
			return true;
		}
		return false;
	};

	console.log(galleryItems);
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
			<div
				id='gallery'
				className='gallery full-gallery de-gallery pf_full_width pf_3_cols sequence'>
				{galleryItems.map((galleryItem) => (
					<GalleryItem galleryItem={galleryItem} />
				))}
				{/* <GalleryItem galleryItems={galleryItems} /> */}
			</div>
		</Grid>
	);
};

export default Gallery;
