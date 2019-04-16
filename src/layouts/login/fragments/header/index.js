import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';


const Header = (props) => {
    return (<div className='loginHeaderWrap'>
        <NavLink to='/'>
        </NavLink>
    </div>);
};

export default Header;