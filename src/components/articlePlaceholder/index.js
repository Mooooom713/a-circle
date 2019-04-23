/*
 * @Author: Joie Qin 
 * @Date: 2019-04-23 10:56:49 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-04-23 10:57:44
 */
import React from 'react';
import './style.css';


/**
 * 文摘摘要块的骨架屏
 * @param {Object} props 唯一外部接口 
 */
const ArticlePlaceHolder = (props) => {
    return (<div className='articlePlaceHolderWrap'>
        <div className='articlePlaceHolder'>
            <div>
                <span></span>
            </div>
            <div>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    </div>);
};


export default ArticlePlaceHolder;