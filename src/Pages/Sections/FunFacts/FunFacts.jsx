import React from 'react';

const FunFacts = () => {
	return (
		<section id='section-fun-facts' className='pt40 pb40 text-light' data-bgcolor='#404040'>
			<div className='container'>
				<div className='row sequence'>
					<div className='col-md-3 col-xs-6 sq-item wow'>
						<div className='de_count'>
							<h3 className='timer' data-to='8240' data-speed='2500'>
								0
							</h3>
							<span>Hours of Works</span>
						</div>
					</div>

					<div className='col-md-3 col-xs-6 sq-item wow'>
						<div className='de_count'>
							<h3 className='timer' data-to='315'>
								0
							</h3>
							<span>Projects Done</span>
						</div>
					</div>

					<div className='col-md-3 col-xs-6 sq-item wow' data-wow-delay='.5s'>
						<div className='de_count'>
							<h3 className='timer' data-to='250'>
								0
							</h3>
							<span>Satisfied Customers</span>
						</div>
					</div>

					<div className='col-md-3 col-xs-6 sq-item wow'>
						<div className='de_count'>
							<h3 className='timer' data-to='32' data-speed='2500'>
								0
							</h3>
							<span>Awards Winning</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FunFacts;
