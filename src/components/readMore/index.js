/*
 * @Author: Joie Qin 
 * @Date: 2019-03-25 10:46:27 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-04-23 11:14:29
 */
import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

/**
 * 查看更多
 * @param {Object} props 唯一外部接口
 */
const ReadMore = (props) => {
    const {wrapStyle, imgWrap, imgStyle, handleReadMore} = props;
    return (<div 
        className='wrapStyle' 
        style={wrapStyle} 
        onClick={handleReadMore}>
        <div style={imgWrap}>
            <img 
                style={imgStyle} 
                src={require('../../img/font/load.png')} 
                alt='read more'/>
        </div>
    </div>);
};

export default ReadMore;

//校验类型
ReadMore.propTypes = {
    wrapStyle: PropTypes.object,
    imgWrap: PropTypes.object,
    imgStyle: PropTypes.object,
    handleReadMore: PropTypes.func.isRequired
};
