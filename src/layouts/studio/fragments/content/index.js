import React from 'react';
import './style.css';
import { forEach } from 'lodash';
import SmallBlock from '../../../../components/smallBlock';
import { NavLink } from 'react-router-dom';

class StudioContent extends React.Component {

    renderTemp(items) {
        let arr = [];
        forEach(items, (item, index) => {
            const temp = <SmallBlock key={index}
                wrapStyle={item.wrapStyle}
                blockStyle={item.blockStyle}
                imgSrc={item.imgSrc} />;
            arr.push(<NavLink key={index} to={item.path}>
                {temp}
            </NavLink>);
        });
        return arr;
    }

    render() {
        const { upItem, downItem } = this.props;
        const upWrap = this.renderTemp(upItem);
        const downWrap = this.renderTemp(downItem);
        return (<div className='studioContentWrap'>
            <div className='upWrap'>
                {upWrap}
            </div>
            <div className='downWrap'>
                {downWrap}
            </div>
        </div>);
    }
}

export default StudioContent;