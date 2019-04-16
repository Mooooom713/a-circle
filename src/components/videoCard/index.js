import React from 'react';
import './style.css';

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