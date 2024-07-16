import React from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/naviation';
import 'swiper/css/pagination';
import { Typography } from '@mui/material';

const PhotoBooths = () => {
	const swiper = new Swiper('.swiper', { modules: [Navigation, Pagination] });

	return (
		<section id='section-testimonial' aria-label='section-testimonial' data-bgcolor='#f8f8f8'>
			<div class='swiper'>
				<div class='swiper-wrapper'>
					<div class='swiper-slide'>
						<div className='de_testi opt-2'>
							<blockquote>
								<p>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</p>
								<div className='de_testi_by'>
									<img src='images/people/1.jpg' className='img-circle' alt='' />
									<span>John, Pixar Studio</span>
								</div>
							</blockquote>
						</div>
					</div>
					<div class='swiper-slide'>
						<div className='de_testi opt-2'>
							<blockquote>
								<p>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</p>
								<div className='de_testi_by'>
									<img src='images/people/2.jpg' className='img-circle' alt='' />
									<span>Sarah, Microsoft</span>
								</div>
							</blockquote>
						</div>
					</div>
					<div class='swiper-slide'>
						{' '}
						<div className='de_testi opt-2'>
							<blockquote>
								<p>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</p>
								<div className='de_testi_by'>
									<img src='images/people/3.jpg' className='img-circle' alt='' />
									<span>Michael, Apple</span>
								</div>
							</blockquote>
						</div>
					</div>
					<div class='swiper-slide'>
						<div className='de_testi opt-2'>
							<blockquote>
								<p>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</p>
								<div className='de_testi_by'>
									<img src='images/people/4.jpg' className='img-circle' alt='' />
									<span>Thomas, Samsung</span>
								</div>
							</blockquote>
						</div>
					</div>
					<div class='swiper-slide'>
						<div className='de_testi opt-2'>
							<blockquote>
								<p>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</p>
								<div className='de_testi_by'>
									<img src='images/people/1.jpg' className='img-circle' alt='' />
									<span>John, Pixar Studio</span>
								</div>
							</blockquote>
						</div>
					</div>
					<div class='swiper-slide'>
						{' '}
						<div className='de_testi opt-2'>
							<blockquote>
								<p>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</p>
								<div className='de_testi_by'>
									<img src='images/people/2.jpg' className='img-circle' alt='' />
									<span>Sarah, Microsoft</span>
								</div>
							</blockquote>
						</div>
					</div>
					<div class='swiper-slide'>
						<div className='de_testi opt-2'>
							<blockquote>
								<p>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</p>
								<div className='de_testi_by'>
									<img src='images/people/3.jpg' className='img-circle' alt='' />
									<span>Michael, Apple</span>
								</div>
							</blockquote>
						</div>
					</div>
					<div class='swiper-slide'>
						{' '}
						<div className='de_testi opt-2'>
							<blockquote>
								<p>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</p>
								<div className='de_testi_by'>
									<img src='images/people/4.jpg' className='img-circle' alt='' />
									<span>Thomas, Samsung</span>
								</div>
							</blockquote>
						</div>
					</div>
				</div>
				<div class='swiper-pagination'></div>

				<div class='swiper-button-prev'></div>
				<div class='swiper-button-next'></div>

				<div class='swiper-scrollbar'></div>
			</div>
		</section>
	);
};

export default PhotoBooths;
