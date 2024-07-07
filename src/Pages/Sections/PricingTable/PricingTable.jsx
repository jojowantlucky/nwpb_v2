import React from 'react';

const PricingTable = () => {
	return (
		<section id='pricing-table'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='item pricing'>
							<div className='container'>
								<div className='row'>
									<div className='col-sm-4'>
										<div className='pricing-s1 mb30'>
											<div className='top'>
												<h2>Starter</h2>
												<p className='price'>
													<span className='currency'>$</span> <b>199</b>{' '}
													<span className='month'>p/annual</span>
												</p>
											</div>
											<div className='bottom'>
												<ul>
													<li>
														<i className='icon_check'></i>Conceptual Overview
													</li>
													<li>
														<i className='icon_check'></i>Styling Layout
													</li>
													<li>
														<i className='icon_check'></i>Color Pallete &amp; Paint Chart
													</li>
													<li>
														<i className='icon_check'></i>Budget Planning
													</li>
													<li>
														<i className='icon_check'></i>1 Day Consultation
													</li>
												</ul>
												<a href='' className='btn btn-custom'>
													Sign Up Now
												</a>
											</div>
										</div>
									</div>
									<div className='col-sm-4'>
										<div className='pricing-s1 rec mb30'>
											<div className='ribbon'>Recommend</div>
											<div className='top'>
												<h2>Intermediate</h2>
												<p className='price'>
													<span className='currency'>$</span> <b>299</b>{' '}
													<span className='month'>p/annual</span>
												</p>
											</div>
											<div className='bottom'>
												<ul>
													<li>
														<i className='icon_check'></i>Conceptual Overview
													</li>
													<li>
														<i className='icon_check'></i>Styling Layout
													</li>
													<li>
														<i className='icon_check'></i>Color Pallete &amp; Paint Chart
													</li>
													<li>
														<i className='icon_check'></i>Budget Planning
													</li>
													<li>
														<i className='icon_check'></i>3 Days Consultation
													</li>
												</ul>
												<a href='' className='btn btn-custom'>
													Sign Up Now
												</a>
											</div>
										</div>
									</div>
									<div className='col-sm-4'>
										<div className='pricing-s1 mb30'>
											<div className='top'>
												<h2>Advanced</h2>
												<p className='price'>
													<span className='currency'>$</span> <b>499</b>{' '}
													<span className='month'>p/annual</span>
												</p>
											</div>
											<div className='bottom'>
												<ul>
													<li>
														<i className='icon_check'></i>Conceptual Overview
													</li>
													<li>
														<i className='icon_check'></i>Styling Layout
													</li>
													<li>
														<i className='icon_check'></i>Color Pallete &amp; Paint Chart
													</li>
													<li>
														<i className='icon_check'></i>Budget Planning
													</li>
													<li>
														<i className='icon_check'></i>2 Weeks Consultation
													</li>
												</ul>
												<a href='' className='btn btn-custom'>
													Sign Up Now
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingTable;
