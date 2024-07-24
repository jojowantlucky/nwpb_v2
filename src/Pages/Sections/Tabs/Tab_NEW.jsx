import { Box, Tabs, Tab, Typography } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';

const Tab_NEW = () => {
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

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} aria-label='tabs'>
					<Tab icon={<LooksOneIcon />} label='Check Availability' {...a11yProps(0)}></Tab>
					<Tab icon={<LooksTwoIcon />} label=' Choose' {...a11yProps(1)}></Tab>
					<Tab icon={<Looks3Icon />}label='Confirm' {...a11yProps(2)}></Tab>
					<Tab icon={<Looks4Icon />}label='PARTY!' {...a11yProps(3)}></Tab>
				</Tabs>
			</Box>

			<CustomTabPanel value={value} index={0}>
				<Typography variant='body1'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laborum consequuntur
					mollitia dolorem odit, natus esse, nihil doloribus sit labore aspernatur adipisci
					quibusdam magnam quae. Sed unde quod numquam illum!
				</Typography>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				<Typography variant='body1'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta quo autem dicta
					facere expedita fugiat ipsum sequi ad eius quae ipsa accusantium eveniet natus ratione ex
					quia iste amet voluptatum, consequatur hic obcaecati. Fugiat sapiente qui ducimus deserunt
					magni fugit possimus aut?
				</Typography>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={2}>
				<Typography variant='body1'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, officiis adipisci eum
					aut animi nesciunt omnis. Unde neque, voluptatem distinctio ipsam blanditiis facilis iste
					vel cupiditate dolores pariatur eum, sed omnis quia. Doloribus at labore eaque odit
					fugiat.
				</Typography>
			</CustomTabPanel>
		</Box>
	);
};

export default Tab_NEW;
