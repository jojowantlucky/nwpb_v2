import React from 'react';

const Welcome = () => {
	return (
		<section id='section-welcome'>
			<div className='container'>
				<div className='row sequence'>
					<div className='col-md-4 feature-box left mb30 sq-item wow sq-item wow'>
						<i className='icon_lightbulb_alt id-color'></i>
						<div className='text'>
							<h3>Design</h3>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem.
						</div>
					</div>
					<div className='col-md-4 feature-box left mb30 sq-item wow'>
						<i className='icon_datareport id-color'></i>
						<div className='text'>
							<h3>Marketing</h3>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem.
						</div>
					</div>
					<div className='col-md-4 feature-box left mb30 sq-item wow'>
						<i className='icon_camera_alt id-color'></i>
						<div className='text'>
							<h3>Photography</h3>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem.
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
