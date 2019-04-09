import React from 'react';
import './style.css';
import contentListZH from '../../../../../common/content-list';
import { includes } from 'lodash';
import fetchUrl from '../../../../../common/collection-fetch-url';
import { connect } from 'react-redux';
import { SIGNIN_LOGIN_STATUS_CHANGE } from '../../../../../store/actionType';
import { withRouter } from 'react-router-dom';
 
class SignInBlock extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            userNameError: '',
            passwordError: '',
            checked: false
        };
    }

    usernameCheck(e){
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

    passwordCheck(e){
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

    handleCheckboxChange(){
        this.setState({
            checked: !this.state.checked
        });
    }

    submit(){
        const validate = !this.state.userNameError && !this.state.passwordError ? true : false;
        const rememberme = this.state.checked;

        if(validate){
            let myOption = {
                method: 'GET'
            };
            fetch(fetchUrl.login(this.state.username, this.state.password), myOption)
            .then(res => res.json())
            .then(json => {
                if(rememberme){
                    localStorage.aCircleUsername = json.NickUserName;
                    localStorage.aCircleUserid = json.UserId;
                }else{
                    sessionStorage.aCircleUsername = json.NickUserName;
                    sessionStorage.aCircleUserid = json.UserId;
                    this.props.saveLoginStatus();
                }
                this.props.history.goBack();
            })
            .catch(mesg => {
                alert(mesg);
            });

            this.setState({
                username: '',
                password: ''
            });
        }
    }

    render(){
        return(<div className='signinblockWrap'>
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
            <div className='inputWrap'>
                <input
                    onChange={(e) => {
                        this.usernameCheck(e);
                    }}
                    className={this.state.userNameError}
                    type='text'
                    value={this.state.username}
                    placeholder={contentListZH.LOGIN_SIGNIN_USER_NAME_PLACEHOLDER}/>
                <input 
                    onChange={(e) => {
                        this.passwordCheck(e);
                    }}
                    className={this.state.passwordError}
                    type='password' 
                    value={this.state.password}
                    placeholder={contentListZH.LOGIN_SIGNIN_PASSWORD_PLACEHOLDER}/>
            </div>
            <div>
                <input
                    checked={this.state.checked}
                    id='remember' 
                    type='checkbox'
                    onChange={() => {
                        this.handleCheckboxChange();
                    }}/>
                <label htmlFor='remember'></label>
                <span>{contentListZH.LOGIN_SIGNIN_REMEMBER}</span>
            </div>
            <button onClick={() => {
                this.submit();
            }}></button>
        </div>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveLoginStatus(){
            const action = {
                type: SIGNIN_LOGIN_STATUS_CHANGE,
                username: sessionStorage.aCircleUsername,
                userid: sessionStorage.aCircleUserid
            };
            dispatch(action);
        }
    };
};

export default connect(null, mapDispatchToProps)(withRouter(SignInBlock));