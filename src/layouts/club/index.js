import React from 'react';
import './style.css';
import CommonHeader from '../../components/commonHeader';
import Content from './content';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Club = (props) => {
    const userImg = props.username && props.userid ? require('../../img/icon/usericon.png') : require('../../img/signin.png');
    return (<div className='clubWrap'>
            <CommonHeader
                backImg={require('../../img/icon/back.png')}
                userImg={userImg}
                pageTitle={props.pageTitle}
                username={props.username}
                goBack={()=>{
                    props.goBack(props);
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

const mapDispatchToProps = (dispatch) => {
    return {
        goBack(props){
            props.history.goBack();
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Club));