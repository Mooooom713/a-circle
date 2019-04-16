import React from 'react';
import './style.css';

const MessageToast = (props) => {
    return (<div style={props.isOpen} className='messagetoastWrap'>
        <p>{props.text}</p>
    </div>);
};


export default MessageToast;