import React from 'react';
import './style.css';
import CommonHeader from '../../components/commonHeader';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { GAOKAO_GO_BACK } from '../../store/actionType';
import Content from './fragments/content';


const GaoKao = (props) => {
    const userImg = props.username && props.userid ? require('../../img/icon/usericon.png') : require('../../img/signin.png');
    const navto = props.username && props.userid ? '/user' : 'login';
    return (<div className='gaokaoWrap'>
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
        pageTitle: state.gaokaoConfig.pageTitle[state.gaokaoConfig.index],
        username: state.username,
        userid: state.userid
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