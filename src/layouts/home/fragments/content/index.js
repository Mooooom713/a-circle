import React from 'react';
import { forEach } from 'lodash';
import LargeBlock from '../../../../components/largeBlock';
import './style.css';
import RouteList from '../../../../common/route-list';
import { NavLink } from 'react-router-dom';

class Content extends React.Component {

    renderComponent(items) {
        let arr = [];
        forEach(items, (item, index) => {
            const path = RouteList[index];
            const component = <LargeBlock
                key={index}
                blockPositon={item.blockPositon}
                imgTitle={item.imgTitle}
                imgSrc={item.imgSrc}
                hoverBg={item.hoverBg} />;
            arr.push(<NavLink to={path} key={index}>
                {component}
            </NavLink>);
        });
        return arr;
    }

    render() {
        const { upItems, downItems } = this.props;
        const upWrap = this.renderComponent(upItems);
        const downWrap = this.renderComponent(downItems);
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

export default Content;