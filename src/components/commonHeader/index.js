/*
 * @Author: Joie Qin 
 * @Date: 2019-03-25 10:57:11 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-04-23 11:07:54
 */

import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


/**
 * 通用头部
 * @param {Object} props 唯一外部接口
 */
const CommonHeader = (props) => {
    const { backImg, userImg, pageTitle, username, navto } = props;
    return (<div className='commonHeadWrap'>
        <img className='backIcon' alt='Go Back' src={backImg} onClick={props.goBack} />
        <img className='titlestyle' alt='Title' src={pageTitle} />
        <NavLink to={navto}>
            <img className='userstyle' alt='About User' src={userImg} />
            <span>{username}</span>
        </NavLink>
    </div>);
};


export default CommonHeader;

//类型校验
CommonHeader.propTypes = {
    backImg: PropTypes.string.isRequired,
    userImg: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    username: PropTypes.string,
    navto: PropTypes.string.isRequired
};