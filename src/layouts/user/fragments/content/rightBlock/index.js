import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import RouteList from '../../../../../common/route-list';
import './style.css';
import contentListZH from '../../../../../common/content-list';
import { connect } from 'react-redux';
import UserInfo from './userInfo';
import UserHistory from './userHistory';

class RightBlock extends React.Component{

    renderInit(){
        return (<p className='initText'>
            {`${this.props.username}, ${contentListZH.USER_INIT_NOTE}`}
            <img 
                src={require('../../../../../img/icon/usercenter.png')}
                alt='welcome'
                className='welcomeImg'/>
        </p>);
    }

    render(){
        return (<div className='userRightBlock'>
            <Switch>
                <Route path={RouteList.userRoute[0]} component={UserInfo} />
                <Route path={RouteList.userRoute[1]} component={UserHistory} />
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


export default connect(mapStateToProps, null)(withRouter(RightBlock));