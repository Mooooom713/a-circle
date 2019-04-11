/*
 * @Author: Joie Qin 
 * @Date: 2019-03-25 10:46:27 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-03-29 11:14:22
 */
import React from 'react';
import './style.css';

const ReadMore = (props) => {
    const {wrapStyle, imgWrap, imgStyle} = props;
    return (<div 
        className='wrapStyle' 
        style={wrapStyle} 
        onClick={props.handleReadMore}>
        <div style={imgWrap}>
            <img 
                style={imgStyle} 
                src={require('../../img/font/load.png')} 
                alt='read more'/>
        </div>
    </div>);
};

export default ReadMore;
