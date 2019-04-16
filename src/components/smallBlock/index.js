import React from 'react';
//import PropTypes from 'prop-types';
import './style.css';

const SmallBlock = (props) => {
	const { wrapStyle, blockStyle, imgStyle, imgSrc } = props;
	return (<div 
		className='smallBlockWrap' 
		style={wrapStyle}>
		<div style={blockStyle}>
			<img 
				style={imgStyle} 
				src={imgSrc} 
				alt='title'/>
		</div>
	</div>);
};



export default SmallBlock;
