import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

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

    renderSignin(){
        return (<NavLink to='/login'>
            <img
                onMouseOver={() => {
                    this.onSignMouseEnter();
                }}
                onMouseOut={() => {
                    this.onSignMouseLeave();
                }}
                src={this.state.signSrc}
                alt="model" />
        </NavLink>);
    }

    renderUser(){
        return (<NavLink to='/user'>
            <img
                style={{width:'2rem', height:'2rem'}}
                src={require('../../../../img/icon/usericon.png')}
                alt="model" />
            <span>{this.props.username}</span>
        </NavLink>);
    }

    render() {
        const userPart = this.props.username && this.props.userid ? this.renderUser() : this.renderSignin();
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
                {userPart}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        userid: state.userid
    };
};

export default connect(mapStateToProps, null)(Header);