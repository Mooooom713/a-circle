import React from 'react';
import PropTypes from 'prop-types';

class SmallBlock extends React.Component {

	render() {
		const { wrapStyle, blockStyle, text, textStyle } = this.props;
		return (<div className={wrapStyle}>
			<div className={blockStyle}>
				<span className={textStyle}>{text}</span>
			</div>
		</div>);
	}
}

SmallBlock.propTypes = {
	wrapStyle: PropTypes.object,
	blockStyle: PropTypes.object,
	textStyle:PropTypes.object,
	text:PropTypes.string
};

export default SmallBlock;
