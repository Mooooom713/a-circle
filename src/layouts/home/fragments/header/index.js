import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            logSrc: require('../../../../img/logo.png'),
            signSrc: require('../../../../img/signin.png')
        };
    }

    onMouseEnter() {
        this.setState({
            logSrc: require('../../../../img/logohover.png')
        });
    }

    onMouseLeave() {
        this.setState({
            logSrc: require('../../../../img/logo.png')
        });
    }

    onSignMouseEnter(){
        this.setState({
            signSrc: require('../../../../img/signinhover.png')
        });
    }

    onSignMouseLeave(){
        this.setState({
            signSrc: require('../../../../img/signin.png')
        });
    }

    render() {
        return (
            <div className='headWrap'>
                <NavLink to='/'>
                    <img
                        onMouseOver={() => {
                            this.onMouseEnter();
                        }}
                        onMouseOut={() => {
                            this.onMouseLeave();
                        }}
                        src={this.state.logSrc}
                        alt="model" />
                </NavLink>
                <NavLink to='/login'>
                    <img
                        onMouseOver={() => {
                            this.onSignMouseEnter();
                        }}
                        onMouseOut={() => {
                            this.onSignMouseLeave();
                        }}
                        src={this.state.signSrc}
                        alt="model" />
                </NavLink>
            </div>
        );
    }
}

export default Header;