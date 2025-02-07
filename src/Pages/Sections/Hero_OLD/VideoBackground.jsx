import React from 'react';

const VideoBackground = () => {
	return (
		<section
			id='section-video-bg'
			className='full-height no-padding text-light'
			data-speed='5'
			data-type='background'>
			<div className='de-video-container'>
				<div className='de-video-content'>
					<div className='text-center'>
						<img className='logo' src='images/logo-2.png' alt='' />
						<div className='spacer-single'></div>
						<div className='spacer-double'></div>
						<div className='spacer-double'></div>
						<div className='spacer-double'></div>
						<div className='mask'>
							<h1 className='s1 wow fadeInUp big' data-wow-delay='1s'>
								WE ARE LINEA
							</h1>
						</div>
						<div className='spacer-single'></div>
						<div className='spacer-double'></div>
						<div className='spacer-double'></div>
						<div className='spacer-double'></div>
						<div className='spacer-double'></div>
					</div>
				</div>

				<div className='de-video-overlay'></div>

				{/* <!-- load your video here --> */}
				<video autoplay='' loop='' muted=''>
					<source
						src='https://s3.envato.com/files/ae4ca2a8-85fd-4390-95dd-bd3936c69007/video_preview_h264.mp4'
						type='video/mp4'
					/>
				</video>
			</div>
		</section>
	);
};

export default VideoBackground;
