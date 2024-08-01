import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Container, Typography, Paper, Box } from '@mui/material';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';

/*
1. Change 'section-testimonial' to 'section-bookwithconfidence'
2. Center section title
3. Inlude Yelp, WW, TK, Google, testimonials, BBB 
*/

const PhotoBooths = () => {
	return (
		<Box
			component='section'
			id='section-testimonial'
			aria-label='section-testimonial'
			data-bgcolor='#f8f8f8'>
			<Typography variant='h4' color='secondary' p={'2rem'} textAlign={'center'} mb={'3rem'}>
				Book With Confidence
			</Typography>
			<Container sx={{ backgroundColor: 'rgb(248, 248, 248)', backgroundSize: 'cover' }}>
				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					modules={[Navigation, Pagination, Autoplay, A11y]}
					loop
					mousewheel
					autoplay={{ delay: 2500, disableOnInteraction: false }}
					pagination={{ clickable: true, dynamicBullets: true }}
					// onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}>
					<SwiperSlide>
						<Paper className='de_testi opt-2'>
							<blockquote>
								<Typography variant='body1'>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</Typography>
								<div className='de_testi_by'>
									<img src='images/people/1.jpg' className='img-circle' alt='' />
									<span>John, Pixar Studio</span>
								</div>
							</blockquote>
						</Paper>
					</SwiperSlide>

					<SwiperSlide>
						<Paper className='de_testi opt-2'>
							<blockquote>
								<Typography variant='body1'>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</Typography>
								<div className='de_testi_by'>
									<img src='images/people/2.jpg' className='img-circle' alt='' />
									<span>Sarah, Microsoft</span>
								</div>
							</blockquote>
						</Paper>
					</SwiperSlide>

					<SwiperSlide>
						<Paper className='de_testi opt-2'>
							<blockquote>
								<Typography variant='body1'>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</Typography>
								<div className='de_testi_by'>
									<img src='images/people/3.jpg' className='img-circle' alt='' />
									<span>Michael, Apple</span>
								</div>
							</blockquote>
						</Paper>
					</SwiperSlide>

					<SwiperSlide>
						<Paper className='de_testi opt-2'>
							<blockquote>
								<Typography variant='body1'>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</Typography>
								<div className='de_testi_by'>
									<img src='images/people/4.jpg' className='img-circle' alt='' />
									<span>Thomas, Samsung</span>
								</div>
							</blockquote>
						</Paper>
					</SwiperSlide>

					<SwiperSlide>
						<Paper className='de_testi opt-2'>
							<blockquote>
								<Typography variant='body1'>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</Typography>
								<div className='de_testi_by'>
									<img src='images/people/1.jpg' className='img-circle' alt='' />
									<span>John, Pixar Studio</span>
								</div>
							</blockquote>
						</Paper>
					</SwiperSlide>

					<SwiperSlide>
						<Paper className='de_testi opt-2'>
							<blockquote>
								<Typography variant='body1'>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</Typography>
								<div className='de_testi_by'>
									<img src='images/people/2.jpg' className='img-circle' alt='' />
									<span>Sarah, Microsoft</span>
								</div>
							</blockquote>
						</Paper>
					</SwiperSlide>

					<SwiperSlide>
						<Paper className='de_testi opt-2'>
							<blockquote>
								<Typography variant='body1'>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</Typography>
								<div className='de_testi_by'>
									<img src='images/people/3.jpg' className='img-circle' alt='' />
									<span>Michael, Apple</span>
								</div>
							</blockquote>
						</Paper>
					</SwiperSlide>

					<SwiperSlide>
						<Paper className='de_testi opt-2'>
							<blockquote>
								<Typography variant='body1'>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
									adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
									dolore.
								</Typography>
								<div className='de_testi_by'>
									<img src='images/people/4.jpg' className='img-circle' alt='' />
									<span>Thomas, Samsung</span>
								</div>
							</blockquote>
						</Paper>
					</SwiperSlide>
				</Swiper>
			</Container>
		</Box>
	);
};

export default PhotoBooths;
