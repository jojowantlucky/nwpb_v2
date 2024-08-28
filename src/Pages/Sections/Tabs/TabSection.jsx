import { Box, Tabs, Tab, Typography, Grid } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPhotoVideo } from 'react-icons/fa';
import { BiPhotoAlbum } from 'react-icons/bi';
import { IoMdShare } from 'react-icons/io';
import { HiOutlinePhoto } from 'react-icons/hi2';
import data from './data.json';
import backgroundImage from './tab-background.jpg';
import { Parallax } from 'react-parallax';
import { Transform } from '@mui/icons-material';

/* 
MAKE <TABS> NOT CENTERED ON SMALL DISPLAYS
*/

const IconCaretDown = (props) => {
	return (
		<svg viewBox='0 0 320 512' fill='currentColor' height='1em' width='1em' {...props}>
			<path d='M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301 191.9 288 191.9L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z' />
		</svg>
	);
};

const TabSection = () => {
	const CustomTabPanel = (props) => {
		const { children, value, index, ...other } = props;

		return (
			<div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
				{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
			</div>
		);
	};

	CustomTabPanel.propTypes = {
		children: PropTypes.node,
		index: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
	};

	const a11yProps = (index) => {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	};

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const icons = [
		<FaPhotoVideo size={'2rem'} />,
		<HiOutlinePhoto size={'2rem'} />,
		<BiPhotoAlbum size={'2rem'} />,
		<IoMdShare size={'2rem'} />,
	];

	return (
		<Grid item minWidth={'100vw'}>
			<Parallax
				blur={1}
				bgImage={backgroundImage}
				bgImageAlt={data.image.alt}
				bgClassName='schooch-up'
				strength={200}>
				<Box width='60%' m='auto' minHeight={'70vh'} mt={'6rem'}>
					<Grid
						container
						display={'flex'}
						spacing={2}
						alignItems={'center'}
						direction={'column'}
						mt={'4rem'}>
						<Grid xs={12} item>
							<Tabs centered value={value} onChange={handleChange} aria-label='tabs'>
								{data.tabs.map((item, index) => (
									<Tab
										key={index}
										sx={{
											backgroundColor: 'rgba(200,200,200, .35)',
											borderRadius: '4px',
											marginBottom: '1rem',
											marginLeft: '1rem',
											marginRight: '1rem',
											minWidth: '8rem',
											minHeight: '8rem',
											color: 'grey.300',
										}}
										className='wow fadeInRight'
										data-wow-delay={`${index * 0.4}s`}
										icon={icons[index]}
										label={item.label}
										{...a11yProps(index)}
										wrapped
									/>
								))}
							</Tabs>
						</Grid>
						<Grid item xs={12}>
							{data.tabs.map((item, index) => (
								<CustomTabPanel value={value} index={index} key={index} sx={{ width: '80%' }}>
									<Typography color='grey.300' variant='body1'>
										{item.tabPanel}
									</Typography>
								</CustomTabPanel>
							))}
						</Grid>
					</Grid>
				</Box>
			</Parallax>
		</Grid>
	);
};

export default TabSection;
