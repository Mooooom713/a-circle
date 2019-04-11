import React from 'react';
import './style.css';
import { forEach } from 'lodash';
import SmallBlock from '../../../../components/smallBlock';
import BlockConfig from '../../../../common/famous-block-config';
import Detail from './detail';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';
import { concat } from 'lodash';

class FamousContent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            linkUrl: props.location.pathname
        };
    }

    shouldComponentUpdate(nextProps){
        if(nextProps.location.pathname === this.props.location.pathname){
          return false;
        }
        return true;
    }

    /**
	 * 渲染画室部分首页
	 */
	renderContent() {
        let upItem = concat(BlockConfig.contentConfig[0], BlockConfig.contentConfig[1], BlockConfig.contentConfig[2]);
        let downItem = concat(BlockConfig.contentConfig[3], BlockConfig.contentConfig[4], BlockConfig.contentConfig[5]);
        const upWrap = this.renderTemp(upItem);
        const downWrap = this.renderTemp(downItem);
		return (<div className='famousContentWrap'>
            <div className='upWrap'>
                {upWrap}
            </div>
            <div className='downWrap'>
                {downWrap}
            </div>
        </div>);
	}

    /**
     * 渲染名师堂主页的内容板块
     * @param {Object} items 
     */
    renderTemp(items) {
        let arr = [];
        forEach(items, (item, index) => {
            const temp = <SmallBlock key={index}
                wrapStyle={item.wrapStyle}
                blockStyle={item.blockStyle}
                imgSrc={item.imgSrc} />;
            arr.push(<NavLink key={index} 
                onClick={()=>{
                    this._selectUrl(item.path);
                }} 
                to={`${item.path}?id=${index}`}>
                    {temp}
            </NavLink>);
        });
        return arr;
    }

    /**
     * 选择了一个模块，该模块路径
     * @param {string} path 
     */
    _selectUrl(path){
        this.setState({
            linkUrl: path
        });
    }


    render() {
        return (<Switch>
            <Route path='/famous' exact component={() => this.renderContent()}/>
            <Route path={this.state.linkUrl} component={Detail}/>
        </Switch>);
    }
}

export default withRouter(FamousContent);