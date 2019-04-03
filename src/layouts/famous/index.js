import React from 'react';
import Content from './fragments/content';
import CommonHeader from '../../components/commonHeader';
import './style.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FAMOUS_GO_BACK } from '../../store/actionType';


class Famous extends React.Component{

	shouldComponentUpdate(nextProps){
		if(nextProps.pageTitle === this.props.pageTitle){
			return false;
		}
		return true;
	}

	render(){
		return (<div className='FamousWrap'>
		<CommonHeader
			backImg={require('../../img/icon/back.png')}
			userImg={require('../../img/signin.png')}
			pageTitle={this.props.pageTitle}
			goBack={()=>{
				this.props.goBack(this.props);
			}}/>
		<Content/>
	</div>);
	}
}

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