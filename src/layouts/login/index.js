import React from 'react';
import './style.css';
import Header from './fragments/header';
import Content from './fragments/content';

const Login = (props) => {
    return (<div className='loginWrap'>
        <Header />
        <Content/>
    </div>);
};


export default Login;