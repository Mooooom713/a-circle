import React from 'react';
import './style.css';
import { forEach } from 'lodash';
import SmallBlock from '../../../../components/smallBlock';
import { concat } from 'lodash';
import BlockConfig from '../../../../common/studio-block-config';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';
import Detail from './detail';

class StudioContent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            linkUrl: props.location.pathname
        };
    }

    renderContentBlock(){
        let upItem = concat(BlockConfig.contentConfig[0], BlockConfig.contentConfig[1], BlockConfig.contentConfig[2]);
        let downItem = concat(BlockConfig.contentConfig[3], BlockConfig.contentConfig[4], BlockConfig.contentConfig[5]);
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

    renderTemp(items) {
        let arr = [];
        forEach(items, (item, index) => {
            const temp = <SmallBlock 
                key={index}
                wrapStyle={item.wrapStyle}
                blockStyle={item.blockStyle}
                imgSrc={item.imgSrc} />;
            arr.push(<NavLink 
                key={index}
                onClick={() => {
                    this._selectUrl(item.path);
                }}
                to={`${item.path}?id=${index}`}>
                    {temp}
            </NavLink>);
        });
        return arr;
    }

    _selectUrl(path){
        this.setState({
            linkUrl: path
        });
    }

    render() {
        return (<Switch>
            <Route path='/studio' exact component={() => this.renderContentBlock()}/>
            <Route path={`${this.state.linkUrl}`} component={Detail}/>
        </Switch>);
    }
}

export default withRouter(StudioContent);