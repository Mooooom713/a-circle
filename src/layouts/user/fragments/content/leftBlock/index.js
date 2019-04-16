import React from 'react';
import { map } from 'lodash';
import { connect } from 'react-redux';
import { USER_CHANGE_RIGHTBLOCK } from '../../../../../store/actionType';
import './style.css';
import RouteList from '../../../../../common/route-list';
import { NavLink, withRouter } from 'react-router-dom';
import AlertBox from '../../../../../components/alertBox';
import contentListZH from '../../../../../common/content-list';
import { USER_CLEAR_LOCAL_STORAGE } from '../../../../../store/actionType';

class LeftBlock extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isOpen: {
                display: 'none'
            },
            mesg: contentListZH.USER_COMFIRM_LOGOUT
        };
    }

    openAlert(){
        this.setState({
            isOpen: {
                display: 'flex'
            }
        });
    }


    clickClose(){
        this.setState({
            isOpen: {
                display: 'none'
            }
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
        const {username, listConfig, clickIndex} = this.props;
        return (<div className='userLeftBlockWrap'>
            <p>
                <span>
                    {username}
                </span>
            </p>
            <ul>
                {
                    map(listConfig, (item, index) => {
                        const styleName = index === clickIndex ? 'active' : '';
                        return <NavLink
                            key={index} 
                            to={RouteList.userRoute[index]}>
                            <li
                                key={index}
                                className={styleName}
                                onClick={() => {
                                    this.props.changeRightBlock(index);
                                }}>
                                {item}
                            </li>
                        </NavLink>;
                    })
                }
                <li onClick={() => {
                    this.openAlert();
                }}>
                    <img 
                        src={require('../../../../../img/icon/logout.png')}
                        alt='log out'/>
                </li>
            </ul>
            {this.renderAlert()}
        </div>);
    }   
}

const mapStateToProps = (state) => {
    return {
        clickIndex: state.userConfig.clickIndex,
        username: state.username
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        changeRightBlock(index){
            const action = {
                type: USER_CHANGE_RIGHTBLOCK,
                clickIndex: index
            };
            dispatch(action);
        },
        clearLocalStorage(){
            const action ={
                type: USER_CLEAR_LOCAL_STORAGE,
                username: '',
                userid: '',
                clickIndex: -1
            };
            dispatch(action);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LeftBlock));