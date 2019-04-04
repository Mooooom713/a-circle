import React from 'react';
import './style.css';
import CommonHeader from '../../components/commonHeader';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { GAOKAO_GO_BACK } from '../../store/actionType';
import Content from './fragments/content';

class GaoKao extends React.Component{
    render(){
        return (<div className='gaokaoWrap'>
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
        pageTitle: state.gaokaoConfig.pageTitle[state.gaokaoConfig.index]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goBack(props){
            props.history.goBack();
			let url = window.location.pathname;
			if(url !== '/gaokao'){
				const action = {
					type: GAOKAO_GO_BACK
				};
				dispatch(action);
			}
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GaoKao));