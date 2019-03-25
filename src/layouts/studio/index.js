import React from 'react';
import Content from './fragments/content';
import CommonHeader from '../../components/commonHeader';
import './style.css';
import BlockConfig from '../../common/studio-block-config';
import { Switch, Route } from 'react-router-dom';
import { concat } from 'lodash';

class Studio extends React.Component {

	renderContent() {
		let upItem = concat(BlockConfig.contentConfig[0], BlockConfig.contentConfig[1], BlockConfig.contentConfig[2]);
		let downItem = concat(BlockConfig.contentConfig[3], BlockConfig.contentConfig[4], BlockConfig.contentConfig[5]);
		return (<Content
			upItem={upItem}
			downItem={downItem}
		/>);
	}

	goBack(){
		window.history.back();
	}

	render() {
		const Content = () => this.renderContent();
		return (<div className='StudioWrap'>
			<CommonHeader
				backImg={require('../../img/icon/back.png')}
				userImg={require('../../img/signin.png')}
				pageTitle={require('../../img/font/studioTitle.png')}
				goBack={this.goBack}/>
			<Switch>
				<Route path='/studio' component={Content} />
			</Switch>
		</div>);
	}
}

export default Studio;