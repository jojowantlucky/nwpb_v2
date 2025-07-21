import React from 'react';
import { Box, Typography } from '@mui/material';

const galleryItems = {
	id: 0,
	name: 'name',
	category: 'illustration',
	websiteOrMobile: 'website',
	url: 'images/portfolio/pf%20(1).jpg',
	picName: 'Photo Booth',
};

const GalleryItems = () => {
	return (
		<div id='gallery' className='gallery full-gallery de-gallery pf_full_width pf_3_cols sequence'>
			<div className={`item gallery-item ${galleryItems.category} ${galleryItems.websiteOrMobile}`}>
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

			<div className='item illustration website gallery-item'>
				<div className='picframe wow'>
					<a className='image-popup' href={`${galleryItems.url}`}>
						<span className='overlay'>
							<div className='pf_text'>
								<span className='.gallery-item-name'>{`${galleryItems.picName}`}</span>
							</div>
						</span>
						<img src={`${galleryItems.picName}`} className='wow' alt='' />
					</a>
				</div>
			</div>

			<div className='item photography gallery-item'>
				<div className='picframe wow'>
					<a className='image-popup' href='images/portfolio/pf%20(2).jpg'>
						<span className='overlay'>
							<div className='pf_text'>
								<span className='gallery-item-name'>Project Name</span>
							</div>
						</span>
						<img src='images/portfolio/pf%20(2).jpg' className='wow' alt='' />
					</a>
				</div>
			</div>

			<div className='item illustration gallery-item'>
				<div className='picframe wow'>
					<a className='image-popup' href='images/portfolio/pf%20(3).jpg'>
						<span className='overlay'>
							<div className='pf_text'>
								<span className='gallery-item-name'>Project Name</span>
							</div>
						</span>
						<img src='images/portfolio/pf%20(3).jpg' className='wow' alt='' />
					</a>
				</div>
			</div>

			<div className='item photography illustration mobile gallery-item'>
				<div className='picframe wow'>
					<a className='image-popup' href='images/portfolio/pf%20(4).jpg'>
						<span className='overlay'>
							<div className='pf_text'>
								<span className='gallery-item-name'>Project Name</span>
							</div>
						</span>
						<img src='images/portfolio/pf%20(4).jpg' className='wow' alt='' />
					</a>
				</div>
			</div>

			<div className='item photography mobile website gallery-item'>
				<div className='picframe wow'>
					<a className='image-popup' href='images/portfolio/pf%20(5).jpg'>
						<span className='overlay'>
							<div className='pf_text'>
								<span className='gallery-item-name'>Project Name</span>
							</div>
						</span>
						<img src='images/portfolio/pf%20(5).jpg' className='wow' alt='' />
					</a>
				</div>
			</div>

			<div className='item mobile website gallery-item'>
				<div className='picframe wow'>
					<a className='image-popup' href='images/portfolio/pf%20(6).jpg'>
						<span className='overlay'>
							<div className='pf_text'>
								<span className='gallery-item-name'>Project Name</span>
							</div>
						</span>
						<img src='images/portfolio/pf%20(6).jpg' className='wow' alt='' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default GalleryItems;
