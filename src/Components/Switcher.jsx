import React from 'react';

const Switcher = () => {
	return (
		<div id='switcher'>
			<span className='custom-close'></span>
			<span className='custom-show'></span>

			<span className='sw-title'>Header Style</span>
			<select name='switcher' id='de-header-style'>
				<option value='opt-2' selected>
					Transparent
				</option>
				<option value='opt-1'>Solid</option>
			</select>

			<div className='clearfix'></div>

			<span className='sw-title'>Header Color</span>
			<select name='switcher' id='de-header-color'>
				<option value='opt-1' selected>
					Dark
				</option>
				<option value='opt-2'>Light</option>
			</select>

			<div className='clearfix'></div>

			<span className='sw-title'>Color :</span>
			<ul id='de-color'>
				<li className='bg1'></li>
				<li className='bg2'></li>
				<li className='bg3'></li>
				<li className='bg4'></li>
				<li className='bg5'></li>
				<li className='bg6'></li>
				<li className='bg7'></li>
				<li className='bg8'></li>
				<li className='bg9'></li>
				<li className='bg10'></li>
			</ul>
		</div>
	);
};

export default Switcher;
