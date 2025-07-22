import React from 'react';
import { Box, Typography } from '@mui/material';

const GalleryItems = ({ galleryItems }) => {
	return (
		<div className={`item gallery-item  ${galleryItems.category}`}>
			<div className='picframe wow'>
				<a className='image-popup' href={`${galleryItems.url}`}>
					<span className='overlay'>
						<div className='pf_text'>
							<span>{`${galleryItems.name}`}</span>
						</div>
					</span>
					<img src={`${galleryItems.url}`} className='wow' alt='' />
				</a>
			</div>
		</div>
	);
};

export default GalleryItems;
