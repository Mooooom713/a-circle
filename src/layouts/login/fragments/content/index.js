import React from 'react';
import './style.css';
import SignInBlock from './signInBlock';
import SignUpBlock from './signUpBlock';

class Content extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            action: 'login',
            signInLogo: require('../../../../img/font/signintabfocus.png'),
            signUpLogo: require('../../../../img/font/signuptab.png'),
            liSignIn: {
                borderBottom: '2px solid #fff'
            },
            liSignUp: {
                borderBottom: '0px'
            },
            overstriking: {
                width: '4rem'
            }
        };
    }

    changeTab(){
        if(this.state.action === 'login'){
            this.setState({
                action: 'register',
                signInLogo: require('../../../../img/font/signintab.png'),
                signUpLogo: require('../../../../img/font/signuptabfocus.png'),
                liSignIn: {
                    borderBottom: '0px'
                },
                liSignUp: {
                    borderBottom: '2px solid #fff'
                }
            });
        }

        if(this.state.action === 'register'){
            this.setState({
                action: 'login',
                signInLogo: require('../../../../img/font/signintabfocus.png'),
                signUpLogo: require('../../../../img/font/signuptab.png'),
                liSignIn: {
                    borderBottom: '2px solid #fff'
                },
                liSignUp: {
                    borderBottom: '0px'
                }
            });
        }
    }

    render(){
        const inputComponent = this.state.action === 'login' ? <SignInBlock/> : <SignUpBlock/>;
        return (<div className='loginContentWrap'>
            <div className='loginBlock'>
                <ul>
                    <li 
                        onClick={() => {
                            this.changeTab();
                        }}
                        style={this.state.liSignIn}>
                        <img 
                            style={this.state.action === 'login' ? this.state.overstriking : null}
                            src={this.state.signInLogo} 
                            alt='sign in'/>
                    </li>
                    <li 
                        onClick={() => {
                            this.changeTab();
                        }}
                        style={this.state.liSignUp}>
                        <img 
                            style={this.state.action === 'register' ? this.state.overstriking : null}
                            src={this.state.signUpLogo} 
                            alt='sign up'/>
                        </li>
                </ul>
                <div className='formWrap'>
                    {inputComponent}
                </div>
            </div>
        </div>);
    }
}

export default Content;