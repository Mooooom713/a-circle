import React from 'react';
import './style.css';
import Header from './fragments/header';
import Content from './fragments/content';

const User = (props) => {
    return (<div className='userWrap'>
        <Header/>
        <Content/>
    </div>);
};

export default User;