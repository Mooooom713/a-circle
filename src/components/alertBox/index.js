/*
 * @Author: Joie Qin 
 * @Date: 2019-04-23 10:48:37 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-04-23 10:52:37
 */
import React from 'react';
import contentListZH from '../../common/content-list';
import './style.css';
import PropTypes from 'prop-types';

/**
 * 弹出提示框
 * @param {Object} props 外部唯一接口 
 */
const AlertBox = (props) => {
    const { text, isOpen, clickClose, clickOK } = props;
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
                            clickClose();
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
                        clickOK();
                    }}>
                    {contentListZH.ALERTBOX_BTN_TEXT}
                </button>
            </p>
        </div>
    </div>);
};


export default AlertBox;


//类型校验
AlertBox.propTypes = {
    text: PropTypes.string,
    isOpen: PropTypes.object,
    clickOK: PropTypes.func.isRequired,
    clickClose: PropTypes.func.isRequired
};