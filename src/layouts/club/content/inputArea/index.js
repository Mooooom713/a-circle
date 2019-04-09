import React from 'react';
import './style.css';
import contentListZH from '../../../../common/content-list';

const InputArea = (props) => {
    return (<div className='inputareaWrap'>
        <textarea
            className='textareaStyle' 
            placeholder={contentListZH.CLUB_PLACEHOLDER}
            maxlength='200'/>
        <button
            className='inputareaBtn'>
            {contentListZH.CLUB_BUTTON_TEXT}
        </button>
    </div>);
};

export default InputArea;