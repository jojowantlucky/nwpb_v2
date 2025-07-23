import React from 'react';
import { Box, Typography } from '@mui/material';

const GalleryItems = ({ galleryItem }) => {
	return (
		<div className={`item gallery-item  ${galleryItem.category}`}>
			<div className='picframe wow'>
				<a className='image-popup' href={`${galleryItem.url}`}>
					<span className='overlay'>
						<div className='pf_text'>
							<span>{`${galleryItem.name}`}</span>
						</div>
					</span>
					<img src={`${galleryItem.url}`} className='wow' alt='' />
				</a>
			</div>
		</div>
	);
};

export default GalleryItems;
