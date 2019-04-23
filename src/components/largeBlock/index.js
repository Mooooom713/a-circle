/*
 * @Author: Joie Qin 
 * @Date: 2019-03-25 10:57:23 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-04-23 11:09:52
 */

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

/**
 * 主页大模块
 */
class LargeBlock extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			hover: false
		};
	}

	onMouseEnter() {
		this.setState({
			hover: true
		});
	}

	onMouseLeave() {
		this.setState({
			hover: false
		});
	}

	render() {
		const { imgSrc, blockPositon, imgTitle, hoverBg } = this.props;
		const titleClass = this.state.hover ? 'show' : 'hide';
		const bgHover = `imgWrap ${hoverBg}`;
		return (
			<div className={blockPositon}>
				<div
					className={bgHover}
					onMouseOver={() => {
						this.onMouseEnter();
					}}
					onMouseOut={() => {
						this.onMouseLeave();
					}}>
					<img src={imgSrc} className={titleClass} alt={imgTitle} />
				</div>
			</div>);
	}
}


export default LargeBlock;

//校验类型
LargeBlock.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	blockPositon: PropTypes.string,
	imgTitle: PropTypes.string.isRequired,
	hoverBg: PropTypes.string
};