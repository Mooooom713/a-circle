import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import RouteList from '../../../../../common/route-list';
import './style.css';
import contentListZH from '../../../../../common/content-list';
import { connect } from 'react-redux';
import UserInfo from './userInfo';
import UserHistory from './userHistory';
import AlertBox from '../../../../../components/alertBox';
import { USER_CLEAR_LOCAL_STORAGE } from '../../../../../store/actionType';

class RightBlock extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isOpen: {
                display: 'flex'
            },
            mesg: contentListZH.USER_COMFIRM_LOGOUT
        };
    }

    renderInit(){
        return (<p className='initText'>
            {`${this.props.username}, ${contentListZH.USER_INIT_NOTE}`}
            <img 
                src={require('../../../../../img/icon/usercenter.png')}
                alt='welcome'
                className='welcomeImg'/>
        </p>);
    }

    clickClose(){
        this.setState({
            isOpen: {
                display: 'none'
            },
            mesg: ''
        });
    }

    clickLogOut(){
        this.setState({
            isOpen: {
                display: 'none'
            },
            mesg: ''
        }, () => {
            this.props.clearLocalStorage();
            localStorage.aCircleUserid = '';
            localStorage.aCircleUsername = '';
            sessionStorage.aCircleUsername = '';
            sessionStorage.aCircleUserid = '';
            this.props.history.push('/');
        });
    }

    renderAlert(){
        return <AlertBox
            isOpen={this.state.isOpen} 
            text={this.state.mesg}
            clickClose={() => {
                this.clickClose();
            }}
            clickOK={() => {
                this.clickLogOut();
            }}
        />;
    }

    render(){
        return (<div className='userRightBlock'>
            <Switch>
                <Route path={RouteList.userRoute[0]} component={UserInfo} />
                <Route path={RouteList.userRoute[1]} component={UserHistory} />
                <Route path={RouteList.userRoute[2]} component={() => this.renderAlert()}/>
                <Route path={RouteList.userRoute[3]} exact component={() => this.renderInit()} />
            </Switch>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearLocalStorage(){
            const action ={
                type: USER_CLEAR_LOCAL_STORAGE,
                username: '',
                userid: ''
            };
            dispatch(action);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RightBlock));