import React from 'react';

const Portfolio = () => {
	return (
		<section
			id='section-portfolio'
			className='no-bottom no-top'
			aria-label='section-portfolio'
			data-bgcolor='#f8f8f8'>
			<div className='pt20 pb10' data-bgcolor='#dddddd'>
				<ul id='filters' className='text-center'>
					<li>
						<a href='#' data-filter='*' className='selected'>
							all projects
						</a>
					</li>
					<li>
						<a href='#' data-filter='.illustration'>
							illustration
						</a>
					</li>
					<li>
						<a href='#' data-filter='.mobile'>
							mobile
						</a>
					</li>
					<li>
						<a href='#' data-filter='.photography'>
							photography
						</a>
					</li>
					<li>
						<a href='#' data-filter='.website'>
							website
						</a>
					</li>
				</ul>
				<div className='clearfix'></div>
			</div>

			<div
				id='gallery'
				className='gallery full-gallery de-gallery pf_full_width pf_3_cols sequence'>
				<div className='item illustration website gallery-item'>
					<div className='picframe wow'>
						<a className='image-popup' href='images/portfolio/pf%20(1).jpg'>
							<span className='overlay'>
								<span className='pf_text'>
									<span className='project-name'>Project Name</span>
								</span>
							</span>
							<img src='images/portfolio/pf%20(1).jpg' className='wow' alt='' />
						</a>
					</div>
				</div>

				<div className='item photography gallery-item'>
					<div className='picframe wow'>
						<a className='image-popup' href='images/portfolio/pf%20(2).jpg'>
							<span className='overlay'>
								<span className='pf_text'>
									<span className='project-name'>Project Name</span>
								</span>
							</span>
							<img src='images/portfolio/pf%20(2).jpg' className='wow' alt='' />
						</a>
					</div>
				</div>

				<div className='item illustration gallery-item'>
					<div className='picframe wow'>
						<a className='image-popup' href='images/portfolio/pf%20(3).jpg'>
							<span className='overlay'>
								<span className='pf_text'>
									<span className='project-name'>Project Name</span>
								</span>
							</span>
							<img src='images/portfolio/pf%20(3).jpg' className='wow' alt='' />
						</a>
					</div>
				</div>
				<div className='item photography illustration mobile gallery-item'>
					<div className='picframe wow'>
						<a className='image-popup' href='images/portfolio/pf%20(4).jpg'>
							<span className='overlay'>
								<span className='pf_text'>
									<span className='project-name'>Project Name</span>
								</span>
							</span>
							<img src='images/portfolio/pf%20(4).jpg' className='wow' alt='' />
						</a>
					</div>
				</div>

				<div className='item photography mobile website gallery-item'>
					<div className='picframe wow'>
						<a className='image-popup' href='images/portfolio/pf%20(5).jpg'>
							<span className='overlay'>
								<span className='pf_text'>
									<span className='project-name'>Project Name</span>
								</span>
							</span>
							<img src='images/portfolio/pf%20(5).jpg' className='wow' alt='' />
						</a>
					</div>
				</div>

				<div className='item mobile website gallery-item'>
					<div className='picframe wow'>
						<a className='image-popup' href='images/portfolio/pf%20(6).jpg'>
							<span className='overlay'>
								<span className='pf_text'>
									<span className='project-name'>Project Name</span>
								</span>
							</span>
							<img src='images/portfolio/pf%20(6).jpg' className='wow' alt='' />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
