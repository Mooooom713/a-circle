import React from 'react';
import Content from './fragments/content';
import CommonHeader from '../../components/commonHeader';
import './style.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FAMOUS_GO_BACK } from '../../store/actionType';


const Famous = (props) => {
	return (<div className='FamousWrap'>
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
		pageTitle: state.famousConfig.pageTitle[state.famousConfig.index]
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		/**
		 * 返回上一级
		 */
		goBack(props){
			let url = window.location.pathname;
			props.history.goBack();
			if(url !== '/famous'){
				const action = {
					type: FAMOUS_GO_BACK
				};
				dispatch(action);
			}
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Famous));