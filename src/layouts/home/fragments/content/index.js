import React from 'react';
import { forEach } from 'lodash';
import LargeBlock from '../../../../components/largeBlock';
import './style.css';

class Content extends React.Component {

    renderComponent(items) {
        let arr = [];
        forEach(items, (item, index) => {
            arr.push(<LargeBlock
                key={index}
                blockPositon={item.blockPositon}
                imgTitle={item.imgTitle}
                imgSrc={item.imgSrc} />);
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