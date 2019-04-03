/*
 * @Author: Joie Qin 
 * @Date: 2019-03-29 11:10:32 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-04-03 13:02:10
 */

import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const ArticleBlock = (props) => {
    const { imgSrc, title, time, subTitle, path, data } = props;
    return (<div className='articleWrap'>
    <img alt='icon' src={imgSrc} />
    <div>
        <NavLink 
            to={path}
            onClick={() => {
                props.navToArticle(data);
            }}>
            <h2>{title}</h2>
        </NavLink>
        <p className='timeStyle'>{time}</p>
        <p className='subTitleStyle'>{subTitle}</p>
    </div>
</div>);
};

export default ArticleBlock;