import React from 'react';
import { connect } from 'react-redux';
import contentListZH from '../../../../../../common/content-list';
import './style.css';

const UserInfo = (props) => {
    return (<div className='userinfoWrap'>
        <p>
            <img
                src={require('../../../../../../img/icon/username.png')}
                alt='user name'/>
            <span>
                {contentListZH.USER_NAME_LABEL}
            </span>
            <span className='valuespan'>
                {props.username}
            </span>
        </p>
        <p>
            <img
                src={require('../../../../../../img/icon/userid.png')}
                alt='user name'/>
            <span>
                {contentListZH.USER_ID_LABEL}
            </span>
            <span className='valuespan'>
                {props.userid}
            </span>
        </p>
    </div>);
};

const mapStateToProps = (state) => {
    return {
        username: state.username,
        userid: state.userid
    };
};

export default connect(mapStateToProps, null)(UserInfo);