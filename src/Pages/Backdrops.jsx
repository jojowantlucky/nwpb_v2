import React from 'react';
import Footer from '../Sections/Footer/Footer';

const Backdrops = () => {
	return (
		<div>
			<section
				id='subheader'
				data-bgimage='url(images/background/11.jpg) fixed'
				data-stellar-background-ratio='.2'>
				<div class='container'>
					<div class='row'>
						<div class='col-md-12'>
							<h1>Design</h1>
							<ul class='crumb'>
								<li>
									<a href='index.html'>Home</a>
								</li>
								<li class='sep'></li>
								<li>Services</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<div id='content' class='no-top no-bottom'>
				<section aria-label='section-services'>
					<div class='container'>
						<div class='row align-items-center'>
							<div class='col-md-6 text-middle'>
								<h3>We Push Design To The Limit</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
									pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
									officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
									magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
									nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>
							<div class='col-md-6 text-middle'>
								<img src='images/misc/7.jpg' class='img-fluid' alt='' />
							</div>
						</div>

						<div class='spacer-single'></div>

						<div class='row'>
							<div class='col-md-6 offset-md-3 text-center'>
								<h3>Related Portfolio</h3>
							</div>

							<div class='col-md-12'>
								<div
									id='gallery'
									class='gallery full-gallery de-gallery pf_full_width pf_4_cols grid sequence'>
									<div class='item illustration website gallery-item'>
										<div class='picframe wow'>
											<a class='image-popup' href='images/portfolio/pf%20(1).jpg'>
												<span class='overlay'>
													<span class='pf_text'>
														<span class='project-name'>Project Name</span>
													</span>
												</span>
												<img src='images/portfolio/pf%20(1).jpg' class='wow' alt='' />
											</a>
										</div>
									</div>
									<div class='item photography gallery-item'>
										<div class='picframe wow'>
											<a class='image-popup' href='images/portfolio/pf%20(2).jpg'>
												<span class='overlay'>
													<span class='pf_text'>
														<span class='project-name'>Project Name</span>
													</span>
												</span>
												<img src='images/portfolio/pf%20(2).jpg' class='wow' alt='' />
											</a>
										</div>
									</div>
									<div class='item illustration gallery-item'>
										<div class='picframe wow'>
											<a class='image-popup' href='images/portfolio/pf%20(3).jpg'>
												<span class='overlay'>
													<span class='pf_text'>
														<span class='project-name'>Project Name</span>
													</span>
												</span>
												<img src='images/portfolio/pf%20(3).jpg' class='wow' alt='' />
											</a>
										</div>
									</div>
									<div class='item photography illustration mobile gallery-item'>
										<div class='picframe wow'>
											<a class='image-popup' href='images/portfolio/pf%20(4).jpg'>
												<span class='overlay'>
													<span class='pf_text'>
														<span class='project-name'>Project Name</span>
													</span>
												</span>
												<img src='images/portfolio/pf%20(4).jpg' class='wow' alt='' />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
			<div id='preloader'>
				<div class='s1'>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	);
};

export default Backdrops;
