import React from 'react';
import Content from './fragments/content';
import CommonHeader from '../../components/commonHeader';
import './style.css';
import { connect } from 'react-redux';
import { STUDIO_GO_BACK } from '../../store/actionType';

const Studio = (props) => {
	const userImg = props.username && props.userid ? require('../../img/icon/usericon.png') : require('../../img/signin.png');
	const navto = props.username && props.userid ? '/user' : 'login';
	return (<div className='StudioWrap'>
		<CommonHeader
			backImg={require('../../img/icon/back.png')}
			userImg={userImg}
			username={props.username}
			pageTitle={props.pageTitle}
			navto={navto}
			goBack={()=>{
				props.goBack(props);
			}}/>
			<Content/>
	</div>);
};

const mapStateToProps = (state) => {
	return {
		pageTitle: state.studioConfig.pageTitle[state.studioConfig.index],
		username: state.username,
        userid: state.userid
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