import React from 'react';
import Content from './fragments/content';
import CommonHeader from '../../components/commonHeader';
import './style.css';
import { connect } from 'react-redux';
import { STUDIO_GO_BACK } from '../../store/actionType';

const Studio = (props) => {
	return (<div className='StudioWrap'>
		<CommonHeader
			backImg={require('../../img/icon/back.png')}
			userImg={require('../../img/signin.png')}
			pageTitle={props.pageTitle}
			goBack={()=>{
				props.goBack(props);
			}}/>
			<Content/>
	</div>);
};

const mapStateToProps = (state) => {
	return {
		pageTitle: state.studioConfig.pageTitle[state.studioConfig.index]
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		/**
		 * 返回上一级
		 */
		goBack(props){
			props.history.goBack();
			let url = window.location.pathname;
			if(url !== '/studio'){
				const action = {
					type: STUDIO_GO_BACK
				};
				dispatch(action);
			}
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Studio);