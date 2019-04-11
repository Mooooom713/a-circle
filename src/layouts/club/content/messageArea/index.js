import React from 'react';
import './style.css';

const MessageArea = (props) => {
    const imgSrc = props.imgSrc ? props.imgSrc : require('../../../../img/icon/placeholerUserIcon.png');
    return (<div className='messageAreaWrap'>
        <div>
            <img src={imgSrc} alt='user icon'/>
            <p>{props.UserName}</p>
            <p>{props.datetime}</p>
        </div>
        <p className='textWrap'>{props.Comments}</p>
    </div>);
};

export default MessageArea;