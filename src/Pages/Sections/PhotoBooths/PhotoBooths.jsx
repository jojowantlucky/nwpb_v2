import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';

import { Container, Typography, Paper, Box } from '@mui/material';

const PhotoBooths = () => {
	return (
		<Box
			component='section'
			id='section-testimonial'
			aria-label='section-testimonial'
			data-bgcolor='#f8f8f8'>
			<Container sx={{ backgroundColor: 'rgb(248, 248, 248)', backgroundSize: 'cover' }}>
				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					modules={[Navigation, Pagination, Autoplay, A11y, Mousewheel]}
					loop
					mousewheel
					autoplay={{ delay: 2500, disableOnInteraction: false }}
					pagination={{ clickable: true, dynamicBullets: true }}
					onSlideChange={() => console.log('slide change')}
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
