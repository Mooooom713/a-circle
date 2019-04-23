/*
 * @Author: Joie Qin 
 * @Date: 2019-04-23 11:17:57 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-04-23 11:19:21
 */
import React from 'react';
import './style.css';
import PropTypes from 'prop-types';


/**
 * 视频卡片
 * @param {Object} props 唯一外部接口
 */
const VideoCard = (props) => {
    const { videoSrc, detailTitle } = props;
    return (<div className='videoWrap'>
        <video controls='controls' preload='meta'>
            <source src={videoSrc} type='video/mp4' />
            您的浏览器不支持 HTML5 video 标签。
        </video>
        <p>{detailTitle}</p>
    </div>);
};


export default VideoCard;

//校验类型
VideoCard.propTypes = {
    videoSrc: PropTypes.string.isRequired,
    detailTitle: PropTypes.string
};