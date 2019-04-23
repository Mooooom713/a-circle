/*
 * @Author: Joie Qin 
 * @Date: 2019-04-23 11:10:17 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-04-23 11:11:56
 */
import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

/**
 * 提示弹出口
 * @param {Object} props 唯一外部接口
 */
const MessageToast = (props) => {
    return (<div style={props.isOpen} className='messagetoastWrap'>
        <p>{props.text}</p>
    </div>);
};


export default MessageToast;

MessageToast.propTypes = {
    isOpen: PropTypes.object,
    text: PropTypes.string
};