import React from 'react';

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className='row'>
					<div className='col-md-4'>
						<div className='widget'>
							<h5>About Linea</h5>
							<div className='tiny-border'>
								<span></span>
							</div>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
								doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
								veritatis et quasi architecto beatae vitae dicta sunt explicabo.
							</p>
						</div>
					</div>

					<div className='col-md-6 offset-md-2'>
						<div className='row'>
							<div className='col-md-4 col-xs-4'>
								<div className='widget'>
									<h5>Company</h5>
									<div className='tiny-border'>
										<span></span>
									</div>
									<ul>
										<li>
											<a href='#'>About Us</a>
										</li>
										<li>
											<a href='#'>Team</a>
										</li>
										<li>
											<a href='#'>Customers</a>
										</li>
										<li>
											<a href='#'>Jobs</a>
										</li>
										<li>
											<a href='#'>Blog</a>
										</li>
									</ul>
								</div>
							</div>

							<div className='col-md-4 col-xs-4'>
								<div className='widget'>
									<h5>Services</h5>
									<div className='tiny-border'>
										<span></span>
									</div>
									<ul>
										<li>
											<a href='#'>Web Design</a>
										</li>
										<li>
											<a href='#'>Development</a>
										</li>
										<li>
											<a href='#'>Animation</a>
										</li>
										<li>
											<a href='#'>Mobile Apps</a>
										</li>
										<li>
											<a href='#'>Campaign</a>
										</li>
									</ul>
								</div>
							</div>

							<div className='col-md-4 col-xs-4'>
								<div className='widget'>
									<h5>Help &amp; Support</h5>
									<div className='tiny-border'>
										<span></span>
									</div>
									<ul>
										<li>
											<a href='#'>Help Center</a>
										</li>
										<li>
											<a href='#'>Contact Us</a>
										</li>
										<li>
											<a href='#'>Live Chat</a>
										</li>
										<li>
											<a href='#'>Terms of Services</a>
										</li>
										<li>
											<a href='#'>Privacy Policy</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='subfooter'>
				<div className='container text-center'>
					<div className='row'>
						<div className='col-md-12'>&copy; Copyright 2021 - Linea by Designesia</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
