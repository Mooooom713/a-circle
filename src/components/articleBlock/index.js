/*
 * @Author: Joie Qin 
 * @Date: 2019-03-29 11:10:32 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-04-23 11:07:31
 */

import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


/**
 * 文章摘要块
 * @param {Object} props 唯一外部接口
 */
const ArticleBlock = (props) => {
    const { imgSrc, title, time, subTitle, path, data, navToArticle } = props;
    return (<div className='articleWrap'>
    <img alt='icon' src={imgSrc} />
    <div>
        <NavLink 
            to={path}
            onClick={() => {
                navToArticle(data);
            }}>
            <h3>{title}</h3>
        </NavLink>
        <p className='timeStyle'>{time}</p>
        <p className='subTitleStyle'>{subTitle}</p>
    </div>
</div>);
};

export default ArticleBlock;


//类型校验
ArticleBlock.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string,
    time: PropTypes.string,
    subTitle: PropTypes.string,
    path: PropTypes.string.isRequired,
    data: PropTypes.object,
    navToArticle: PropTypes.func
};