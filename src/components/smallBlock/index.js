import React from 'react';
//import PropTypes from 'prop-types';
import './style.css';

class SmallBlock extends React.Component {

	render() {
		const { placeHolderName, wrapStyle, blockStyle, imgStyle, imgSrc } = this.props;
		return (<div className={placeHolderName} style={wrapStyle}>
			<div style={blockStyle}>
				<img style={imgStyle} src={imgSrc} alt='title'/>
			</div>
		</div>);
	}
}



export default SmallBlock;
