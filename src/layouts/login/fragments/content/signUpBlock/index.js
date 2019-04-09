import React from 'react';
import './style.css';
import contentListZH from '../../../../../common/content-list';
import { includes } from 'lodash';
import fetchUrl from '../../../../../common/collection-fetch-url';

class SignUpBlock extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            comfirmPassword: '',
            userNameError: '',
            passwordError: '',
            comfirmError: ''
        };
    }

    checkUserName(e){
        let value = e.target.value;
        let reg = /^[0-9a-zA-Z]*$/g;
        if(!reg.test(value) || !value || value.length > 8){
            this.setState({
                userNameError: 'inputerror',
                username: value
            });
        }else{
            this.setState({
                userNameError: '',
                username: value
            });
        }
    }

    checkPassword(e){
        let value = e.target.value;
        if(value.charCodeAt() > 255 || !value || includes(value, '`') || includes(value, `'`)|| includes(value, '"') || value.length > 10){
            this.setState({
                passwordError: 'inputerror',
                password: value
            });
        }else{
            this.setState({
                passwordError: '',
                password: value
            });
        }
    }

    saveComfirmData(e){
        let value = e.target.value;
        this.setState({
            comfirmPassword: value
        });
    }

    comfirmPassword(e){
        let value = e.target.value;

        if(value !== this.state.password){
            this.setState({
                comfirmError: 'inputerror'
            });
        }
    }

    submit(){
        const validate = !this.state.userNameError && !this.state.passwordError && !this.state.comfirmError ? true : false;

        if(validate){
            let myOption = {
                method: 'GET'
            };

            fetch(fetchUrl.register(this.state.username, this.state.password, this.state.comfirmPassword), myOption)
            .then(res => res.json())
            .then(json => {
                const username = json.NickUserName;
                const userid = json.UserId;
            })
            .catch(mesg => {
                alert(mesg);
            });

        }
    }

    render(){
        return (<div className='signupblockWrap'>
            <span 
                className='userNameError'
                style={this.state.userNameError ? {visibility: 'visible'} : {visibility: 'hidden'}}>
                {contentListZH.LOGIN_SIGNIN_USERNAME_ERROR_TEXT}
            </span>
            <span 
                className='passwordError'
                style={this.state.passwordError ? {visibility: 'visible'} : {visibility: 'hidden'}}>
                {contentListZH.LOGIN_SIGNIN_PASSWORD_ERROR_TEXT}
            </span>
            <span 
                className='comfirmError'
                style={this.state.comfirmError ? {visibility: 'visible'} : {visibility: 'hidden'}}>
                {contentListZH.LOGIN_SIGNUP_PASSWORD_ERROR_TEXT}
            </span>
            <div className='inputWrap'>
                <input
                    onChange={(e) => {
                        this.checkUserName(e);
                    }}
                    className={this.state.userNameError}
                    type='text' 
                    value={this.state.username}
                    placeholder={contentListZH.LOGIN_SIGNIN_USER_NAME_PLACEHOLDER}/>
                <input 
                    onChange={(e) => {
                        this.checkPassword(e);
                    }}
                    className={this.state.passwordError}
                    type='password' 
                    value={this.state.password}
                    placeholder={contentListZH.LOGIN_SIGNIN_PASSWORD_PLACEHOLDER}/>
                <input
                    onBlur={(e) => {
                        this.comfirmPassword(e);
                    }}
                    onChange={(e) => {
                        this.saveComfirmData(e);
                    }}
                    className={this.state.comfirmError}
                    type='password'
                    value={this.state.comfirmPassword} 
                    placeholder={contentListZH.LOGIN_SIGNUP_PASSWORD_PLACEHOLDER_COMFIRM}/>
                <button onClick={() => {
                    this.submit();
                }}></button>
            </div>     
        </div>);
    }
}


export default SignUpBlock;