/*
 * @Author: Joie Qin 
 * @Date: 2019-03-25 10:57:11 
 * @Last Modified by:   Joie Qin 
 * @Last Modified time: 2019-03-25 10:57:11 
 */

import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

class CommonHeader extends React.Component {
    render() {
        const { backImg, userImg, navUserPath, pageTitle } = this.props;
        return (<div className='commonHeadWrap'>
            <img className='backIcon' alt='Go Back' src={backImg} onClick={() => {
                this.props.goBack();
            }} />
            <img className='titlestyle' alt='Title' src={pageTitle} />
            <NavLink to={navUserPath}>
                <img className='userstyle' alt='About User' src={userImg} />
            </NavLink>
        </div>);
    }
}


export default CommonHeader;