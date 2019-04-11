import React from 'react';
import { map } from 'lodash';
import { connect } from 'react-redux';
import { USER_CHANGE_RIGHTBLOCK } from '../../../../../store/actionType';
import './style.css';
import RouteList from '../../../../../common/route-list';
import { NavLink } from 'react-router-dom';

const LeftBlock = (props) => {
    return (<div className='userLeftBlockWrap'>
        <p>
            <span>
                {props.username}
            </span>
        </p>
        <ul>
            {
                map(props.listConfig, (item, index) => {
                    const styleName = index === props.clickIndex ? 'active' : '';
                    return <NavLink
                        key={index} 
                        to={RouteList.userRoute[index]}>
                        <li
                            key={index}
                            className={styleName}
                            onClick={() => {
                                props.changeRightBlock(index);
                            }}>
                            {item}
                        </li>
                    </NavLink>;
                })
            }
        </ul>
    </div>);
};

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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftBlock);