/*
 * @Author: Joie Qin 
 * @Date: 2019-03-25 10:57:11 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-04-11 14:06:39
 */

import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

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