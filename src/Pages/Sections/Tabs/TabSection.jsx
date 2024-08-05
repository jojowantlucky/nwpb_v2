import { Box, Tabs, Tab, Typography, Container } from '@mui/material';
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
		<Parallax
			blur={4}
			bgImage={backgroundImage}
			bgImageAlt={data.image.alt}
			bgClassName='schooch-up'>
			<Box
				alignItems='center'
				width='60%'
				m='auto'
				minHeight={'70vh'}
				display={'flex'}
				justifyContent={'center'}
				flexDirection={'column'}>
				<Container>
					<Tabs centered value={value} onChange={handleChange} aria-label='tabs'>
						{data.tabs.map((item, index) => (
							<Tab
								sx={{
									backgroundColor: 'rgba(200,200,200, .3)',
									borderRadius: '4px',
									marginBottom: '1rem',
									marginLeft: '1rem',
									marginRight: '1rem',
								}}
								icon={icons[index]}
								label={item.label}
								{...a11yProps(index)}></Tab>
						))}
					</Tabs>
				</Container>

				{data.tabs.map((item, index) => (
					<CustomTabPanel value={value} index={index} sx={{ width: '80%' }}>
						<Typography variant='body1'>{item.tabPanel}</Typography>
					</CustomTabPanel>
				))}
			</Box>
		</Parallax>
	);
};

export default TabSection;
