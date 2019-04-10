import React from 'react';
import contentListZH from '../../common/content-list';
import './style.css';

const AlertBox = (props) => {
    const { text, isOpen } = props;
    return (<div className='alertBoxWrap' style={isOpen}>
        <div className='modelWrap'></div>
        <div className='alertBox'>
            <p>
                <span>
                    <img
                        alt='note'
                        className='dialogNote'
                        src={require('../../img/icon/note.png')}/>
                    <span>{contentListZH.ALERTBOX_NOTE_TEXT}</span>
                </span>
                <span>
                    <img
                        onClick={() => {
                            props.clickClose();
                        }}
                        alt='close' 
                        src={require('../../img/icon/close.png')}
                        className='dialogClose'/>
                </span>
            </p>
            <p>
                <span className='textWrap'>{text}</span>
            </p>
            <p>
                <button
                    onClick={() => {
                        props.clickOK();
                    }}>
                    {contentListZH.ALERTBOX_BTN_TEXT}
                </button>
            </p>
        </div>
    </div>);
};


export default AlertBox;