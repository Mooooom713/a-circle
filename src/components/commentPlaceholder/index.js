/*
 * @Author: Joie Qin 
 * @Date: 2019-04-23 10:58:00 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-04-23 10:58:25
 */
import React from 'react';
import './style.css';


/**
 * 评论模块的骨架屏
 * @param {Object} props 唯一外部接口
 */
const CommentPlaceHolder = (props) => {
    return (<div className='commentPlaceHolderWrap'>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div>
                <p></p>
            </div>
    </div>);
};


export default CommentPlaceHolder;