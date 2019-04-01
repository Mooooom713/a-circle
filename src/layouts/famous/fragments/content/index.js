import React from 'react';
import './style.css';
import { forEach } from 'lodash';
import SmallBlock from '../../../../components/smallBlock';
import { NavLink } from 'react-router-dom';

class FamousContent extends React.Component {

    renderTemp(items, changeRoute) {
        let arr = [];
        forEach(items, (item, index) => {
            const temp = <SmallBlock key={index}
                wrapStyle={item.wrapStyle}
                blockStyle={item.blockStyle}
                imgSrc={item.imgSrc} />;
            arr.push(<NavLink key={index} 
                onClick={()=>{
                    changeRoute(item.path);
                }} 
                to={`${item.path}/${index+1}`}>
                    {temp}
            </NavLink>);
        });
        return arr;
    }

    render() {
        const { upItem, downItem, changeRoute } = this.props;
        const upWrap = this.renderTemp(upItem, changeRoute);
        const downWrap = this.renderTemp(downItem, changeRoute);
        return (<div className='famousContentWrap'>
            <div className='upWrap'>
                {upWrap}
            </div>
            <div className='downWrap'>
                {downWrap}
            </div>
        </div>);
    }
}

export default FamousContent;