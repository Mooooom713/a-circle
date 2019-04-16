import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {

    renderSignin(){
        return (<NavLink className='signinWrap' to='/login'>
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
                <NavLink activeClassName='logoWrap' to='/'>
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