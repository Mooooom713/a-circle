import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class Header extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            logoSrc: require('../../../../img/logo.png')
        };
    }

    onMouseEnter(){
        this.setState({
            logoSrc: require('../../../../img/logohover.png')
        });
    }

    onMouseLeave(){
        this.setState({
            logoSrc: require('../../../../img/logo.png')
        });
    }

    render(){
        return (<div className='loginHeaderWrap'>
            <NavLink to='/'>
                <img
                    onMouseOver={() => {
                        this.onMouseEnter();
                    }}
                    onMouseOut={() => {
                        this.onMouseLeave();
                    }}
                    src={this.state.logoSrc} 
                    alt='logo'/>
            </NavLink>
        </div>);
    }
}

export default Header;