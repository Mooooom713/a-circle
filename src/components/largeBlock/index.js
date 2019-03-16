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
		const { imgSrc, blockPositon, imgTitle } = this.props;
		const titleClass = this.state.hover ? 'show' : 'hide';
		return (
			<div className={blockPositon}>
				<div
					className='imgWrap'		
					onMouseOver={() => {
						this.onMouseEnter();
					}}
					onMouseOut={() => {
						this.onMouseLeave();
					}}>
					<img src={imgSrc} className={titleClass} alt={imgTitle}/>
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
