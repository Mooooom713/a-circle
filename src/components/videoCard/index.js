import React from 'react';
import './style.css';

const VideoCard = (props) => {
    const { videoSrc, detailTitle } = props;
    return (<div className='videoWrap'>
        <video src={videoSrc} controls="controls">
            您的浏览器不支持video标签
        </video>
        <p>{detailTitle}</p>
    </div>);
};


export default VideoCard;