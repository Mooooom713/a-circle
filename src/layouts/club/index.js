import React from 'react';
import './style.css';
import CommonHeader from '../../components/commonHeader';
import Content from './content';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Club = (props) => {
    return (<div className='clubWrap'>
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
        pageTitle: state.clubConfig.pageTitle[state.clubConfig.index]
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