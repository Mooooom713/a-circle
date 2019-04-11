import React from 'react';
import './style.css';
import CommonHeader from '../../components/commonHeader';
import Content from './content';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Club = (props) => {
    const userImg = props.username && props.userid ? require('../../img/icon/usericon.png') : require('../../img/signin.png');
    const navto = props.username && props.userid ? '/user' : 'login';
    return (<div className='clubWrap'>
            <CommonHeader
                backImg={require('../../img/icon/back.png')}
                userImg={userImg}
                pageTitle={props.pageTitle}
                username={props.username}
                navto={navto}
                goBack={()=>{
                    props.history.goBack();
                }}/>
            <Content/>
        </div>);
};

const mapStateToProps = (state) => {
    return {
        pageTitle: state.clubConfig.pageTitle[state.clubConfig.index],
        username: state.username,
        userid: state.userid
    };
};


export default connect(mapStateToProps, null)(withRouter(Club));