import React from 'react';
import './style.css';
import contentListZH from '../../../../../common/content-list';

const SignUpBlock = (props) => {
    return (<div className='signupblockWrap'>
        <div className='inputWrap'>
            <input
                type='text' 
                placeholder={contentListZH.LOGIN_SIGNIN_USER_NAME_PLACEHOLDER}/>
            <input 
                type='password' 
                placeholder={contentListZH.LOGIN_SIGNIN_PASSWORD_PLACEHOLDER}/>
            <input 
                type='password' 
                placeholder={contentListZH.LOGIN_SIGNUP_PASSWORD_PLACEHOLDER_COMFIRM}/>
            <button></button>
        </div>     
    </div>);
};


export default SignUpBlock;