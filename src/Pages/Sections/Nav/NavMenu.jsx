import { Container, Link } from '@mui/material';
import React from 'react';

const NavMenu = () => {
	return (
		<Container component='nav'>
			<ul id='mainmenu'>
				<li>
					<Link href='index.html'>
						Home<span></span>
					</Link>
					<ul className='mega'>
						<li>
							<div className='container'>
								<div className='menu-content'>
									<div className='row'>
										<div className='col-md-3 hidden-sm'>
											<Link href='index-dark.html' className='hover no-padding'>
												<img
													src='images/misc/preview.jpg'
													className='img-fluid img-rounded'
													alt=''
												/>
											</Link>
										</div>

										<div className='col-md-3'>
											<ul>
												<li className='title'>Homepage New</li>
												<li>
													<Link href='index-dark.html'>Homepage Dark</Link>
												</li>
												<li>
													<Link href='index-startup.html'>Homepage Startup</Link>
												</li>
												<li>
													<Link href='index-boxed-1.html'>Homepage Boxed Style</Link>
												</li>
												<li>
													<Link href='index-personal.html'>Homepage Personal</Link>
												</li>
											</ul>
										</div>

										<div className='col-md-3'>
											<ul>
												<li className='title'>Homepage Default</li>
												<li>
													<Link href='index.html'>Homepage 1</Link>
												</li>
												<li>
													<Link href='index-2.html'>Homepage 2</Link>
												</li>
												<li>
													<Link href='index-3.html'>Homepage 3</Link>
												</li>
												<li>
													<Link href='index-4.html'>Homepage 4</Link>
												</li>
												<li>
													<Link href='index-5.html'>Homepage 5</Link>
												</li>
											</ul>
										</div>

										<div className='col-md-3'>
											<ul>
												<li className='title'>More Homepage</li>
												<li>
													<Link href='coming-soon-1.html'>Coming Soon 1</Link>
												</li>
												<li>
													<Link href='coming-soon-2.html'>Coming Soon 2</Link>
												</li>
												<li>
													<Link href='maintenance.html'>Maintenance</Link>
												</li>
											</ul>
										</div>
										<div className='clearfix'></div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</li>
				<li>
					<Link href='#'>
						Pages<span></span>
					</Link>
					<ul className='mega'>
						<li>
							<div className='container'>
								<div className='menu-content'>
									<div className='row'>
										<div className='col-md-3'>
											<ul>
												<li>
													<Link href='about.html'>About Us</Link>
												</li>
												<li>
													<Link href='career.html'>Career</Link>
												</li>
												<li>
													<Link href='faq-1.html'>FAQ 1</Link>
												</li>
												<li>
													<Link href='faq-2.html'>FAQ 2</Link>
												</li>
											</ul>
										</div>

										<div className='col-md-3'>
											<ul>
												<li>
													<Link href='login-1.html'>Login 1</Link>
												</li>
												<li>
													<Link href='login-2.html'>Login 2</Link>
												</li>
												<li>
													<Link href='login-3.html'>Login 3</Link>
												</li>
												<li>
													<Link href='login-4.html'>Login 4</Link>
												</li>
											</ul>
										</div>

										<div className='col-md-3'>
											<ul>
												<li>
													<Link href='history.html'>History</Link>
												</li>
												<li>
													<Link href='history-with-image.html'>History With Image</Link>
												</li>
												<li>
													<Link href='how-it-works.html'>How It Works</Link>
												</li>
												<li>
													<Link href='register.html'>Register</Link>
												</li>
											</ul>
										</div>

										<div className='col-md-3'>
											<ul>
												<li>
													<Link href='team.html'>Team</Link>
												</li>
												<li>
													<Link href='team-single-1.html'>Team Single 1</Link>
												</li>
												<li>
													<Link href='team-single-2.html'>Team Single 2</Link>
												</li>
												<li>
													<Link href='404.html'>404</Link>
												</li>
											</ul>
										</div>

										<div className='clearfix'></div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</li>

				<li>
					<Link href='#'>
						Services<span></span>
					</Link>
					<ul>
						<li>
							<Link href='services-image.html'>Services Image</Link>
						</li>
						<li>
							<Link href='services-icon.html'>Services Icon</Link>
						</li>
						<li>
							<Link href='service-single.html'>Services Single</Link>
						</li>
						<li>
							<Link href='pricing.html'>Pricing</Link>
						</li>
					</ul>
				</li>

				<li>
					<Link href='#'>
						Gallery<span></span>
					</Link>
					<ul>
						<li>
							<Link href='gallery-4-cols.html'>4 Cols</Link>
						</li>
						<li>
							<Link href='gallery-4-cols-fullwidth.html'>4 Cols Fullwidth</Link>
						</li>
						<li>
							<Link href='gallery-3-cols.html'>3 Cols</Link>
						</li>
						<li>
							<Link href='gallery-3-cols-fullwidth.html'>3 Cols Fullwidth</Link>
						</li>
						<li>
							<Link href='gallery-2-cols.html'>2 Cols</Link>
						</li>
						<li>
							<Link href='gallery-2-cols-fullwidth.html'>2 Cols Fullwidth</Link>
						</li>
					</ul>
				</li>

				<li>
					<Link href='#'>
						Elements<span></span>
					</Link>
					<ul>
						<li>
							<Link href='sitemap.html'>Sitemap</Link>
						</li>
						<li>
							<Link href='skill-bar.html'>Skill Bar</Link>
						</li>
						<li>
							<Link href='testimonial-carousel.html'>Testimonial Carousel</Link>
						</li>
					</ul>
				</li>

				<li>
					<Link href='#'>
						News<span></span>
					</Link>
					<ul>
						<li>
							<Link href='news.html'>News Default</Link>
						</li>
						<li>
							<Link href='news-big-image.html'>News Big Image</Link>
						</li>
						<li>
							<Link href='news-carousel.html'>News Carousel</Link>
						</li>
						<li>
							<Link href='news-left-sidebar.html'>News Left Sidebar</Link>
						</li>
						<li>
							<Link href='news-single.html'>News Single</Link>
						</li>
					</ul>
				</li>

				<li>
					<Link href='#'>
						Contact<span></span>
					</Link>
					<ul>
						<li>
							<Link href='contact.html'>Default</Link>
						</li>
						<li>
							<Link href='contact-with-gdpr.html'>Default With GDPR</Link>
						</li>
					</ul>
				</li>
			</ul>
		</Container>
	);
};

export default NavMenu;
