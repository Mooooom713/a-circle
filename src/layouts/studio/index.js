import React from 'react';
import Content from './fragments/content';
import Detail from './fragments/detail';
import CommonHeader from '../../components/commonHeader';
import './style.css';
import BlockConfig from '../../common/studio-block-config';
import { Switch, Route, withRouter } from 'react-router-dom';
import { concat, find, includes } from 'lodash';
import { connect } from 'react-redux';
import { STUDIO_NAVTO_DETAIL, STUDIO_GO_BACK } from '../../store/actionType';

class Studio extends React.Component {

	/**
	 * 渲染画室部分首页
	 */
	renderContent() {
		let upItem = concat(BlockConfig.contentConfig[0], BlockConfig.contentConfig[1], BlockConfig.contentConfig[2]);
		let downItem = concat(BlockConfig.contentConfig[3], BlockConfig.contentConfig[4], BlockConfig.contentConfig[5]);
		return (<Content
			changeRoute={(e)=>{
				this.props.changeRoute(e);
			}}
			upItem={upItem}
			downItem={downItem}
		/>);
	}

	/**
	 * 渲染画室一个类型的详情页面
	 */
	renderDetail(){
		let item = find(BlockConfig.routeConfig, (item)=>{
			return includes(this.props.nowPath, item.name);
		});
		let index = item ? item.index : 0;
		let queryUrl = BlockConfig.detailConfig[index][this.props.nowPath];
		return <Detail queryUrl={queryUrl} />;
	}

	

	render() {
		return (<div className='StudioWrap'>
			<CommonHeader
				backImg={require('../../img/icon/back.png')}
				userImg={require('../../img/signin.png')}
				pageTitle={this.props.pageTitle}
				goBack={()=>{
					this.props.goBack(this.props);
				}}/>
			<Switch>
				{
					this.props.nowPath === '/studio' ?
					<Route 
						path={this.props.nowPath} 
						exact 
						component={() => this.renderContent()} />
					:
					<Route 
						path={this.props.nowPath} 
						component={() => this.renderDetail()}/>
				}
			</Switch>
		</div>);
	}
}

const mapStateToProps = (state) => {
	return {
		pageTitle: state.studioConfig.pageTitle[state.studioConfig.index],
		nowPath: state.nowUrl
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		/**
		 * 跳转到更详情
		 */
		changeRoute(path){
			let index = find(BlockConfig.routeConfig, (item)=>{
				return includes(path, item.name);
			}).index;
			const action = {
				type: STUDIO_NAVTO_DETAIL,
				navPath: path,
				pageTitle: BlockConfig.detailConfig[index].pageTitle
			};
			dispatch(action);
		},
		/**
		 * 返回上一级
		 */
		goBack(props){
			let url = window.location.pathname;
			props.history.goBack();
			if(url !== '/studio'){
				const action = {
					type: STUDIO_GO_BACK
				};
				dispatch(action);
			}
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Studio));