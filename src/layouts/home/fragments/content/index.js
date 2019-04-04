import React from 'react';
import { forEach } from 'lodash';
import LargeBlock from '../../../../components/largeBlock';
import './style.css';
import RouteList from '../../../../common/route-list';
import { HOME_TO_DETAIL_BLOCK } from '../../../../store/actionType';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Content extends React.Component {

    /**
     * 渲染上面两个模块(画室、名师堂)
     * @param {Object} items 
     */
    renderUpComponent(items) {
        let arr = [];
        forEach(items, (item, index) => {
            const path = RouteList.mainRoute[index];
            const component = <LargeBlock
                key={index}
                blockPositon={item.blockPositon}
                imgTitle={item.imgTitle}
                imgSrc={item.imgSrc}
                hoverBg={item.hoverBg} />;
            arr.push(<NavLink 
                to={path} 
                onClick={() => {
                    this.props.handleNavToBlock();
                }} 
                key={index}>
                {component}
            </NavLink>);
        });
        return arr;
    }

    /**
     * 渲染下面两个模块(高考、俱乐部)
     * @param {Object} items 
     */
    renderDownComponent(items) {
        let arr = [];
        forEach(items, (item, index) => {
            const path = RouteList.mainRoute[index+2];
            const component = <LargeBlock
                key={index}
                blockPositon={item.blockPositon}
                imgTitle={item.imgTitle}
                imgSrc={item.imgSrc}
                hoverBg={item.hoverBg} />;
            arr.push(<NavLink 
                to={path} 
                onClick={() => {
                    this.props.handleNavToBlock();
                }} 
                key={index}>
                {component}
            </NavLink>);
        });
        return arr;
    }

    render() {
        const { upItems, downItems } = this.props;
        const upWrap = this.renderUpComponent(upItems);
        const downWrap = this.renderDownComponent(downItems);
        return (
            <div className="homeWrap">
                <div className="upWrap">
                    {upWrap}
                </div>
                <div className="downWrap">
                    {downWrap}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleNavToBlock(){
            const action = {
                type: HOME_TO_DETAIL_BLOCK
            };
            dispatch(action);
        }
    };
};

export default connect(null, mapDispatchToProps)(Content);