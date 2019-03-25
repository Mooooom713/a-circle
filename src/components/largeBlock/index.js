/*
 * @Author: Joie Qin 
 * @Date: 2019-03-25 10:57:23 
 * @Last Modified by:   Joie Qin 
 * @Last Modified time: 2019-03-25 10:57:23 
 */

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

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


LargeBlock.propTypes = {
	imageUrl: PropTypes.string,
	blockStyle: PropTypes.string,
	imgStyle: PropTypes.string
};

export default LargeBlock;
