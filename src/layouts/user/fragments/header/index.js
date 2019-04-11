import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';
import { USER_NAV_BACK } from '../../../../store/actionType';
import { connect } from 'react-redux';

const Header = (props) => {
    return (<div className='userHeaderWrap'>
        <span>
            <img 
                onClick={() => {
                    props.history.push('/');
                    props.navBack();
                }}
                src={require('../../../../img/icon/back.png')}
                alt='back'/>
        </span>
        <span>
            <img
                src={require('../../../../img/font/usercenter.png')}
                alt='title'/>
        </span>
    </div>);
};

const mapDispatchToProps = (dispatch) => {
    return {
        navBack(){
            const action = {
                type: USER_NAV_BACK,
                clickIndex: -1
            };
            dispatch(action);
        }
    };
};


export default connect(null, mapDispatchToProps)(withRouter(Header));