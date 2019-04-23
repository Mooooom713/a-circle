/*
 * @Author: Joie Qin 
 * @Date: 2019-04-23 11:14:44 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-04-23 11:16:48
 */
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

/**
 * 分类模块
 * @param {Object} props 唯一外部接口
 */
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


//校验类型
SmallBlock.propTypes = {
	wrapStyle: PropTypes.object,
	blockStyle: PropTypes.object,
	imgStyle: PropTypes.object,
	imgSrc: PropTypes.string.isRequired
};
