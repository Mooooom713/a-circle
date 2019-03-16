import React from 'react';
import Content from './fragments/content';
import Header from './fragments/header';
import Footer from './fragments/footer';
import './style.css';
import contentListZH from '../../common/content-list';

class Home extends React.Component {

	render() {
		let upItems = [
			{
				blockPositon: 'blockLargeLeftTop',
				imgTitle: contentListZH.MODEL_NAME_STUDIO_ImgTitle,
				imgSrc: contentListZH.MODEL_NAME_Studio
			},
			{
				blockPositon: 'blockLargeRightTop',
				imgTitle: contentListZH.MODEL_NAME_FAMOUS_ImgTitle,
				imgSrc: contentListZH.MODEL_NAME_Famous
			}
		];
		let downItems = [
			{
				blockPositon: 'blockLargeLeftBottom',
				imgTitle: contentListZH.MODEL_NAME_GAOKAO_ImgTitle,
				imgSrc: contentListZH.MODEL_NAME_Gaokao
			},
			{
				blockPositon: 'blockLargeRightBottom',
				imgTitle: contentListZH.MODEL_NAME_CLUB_ImgTitle,
				imgSrc: contentListZH.MODEL_NAME_Club
			}
		];
		return (
			<div className='contentWrap'>
				<Header />
				<Content upItems={upItems} downItems={downItems} />
				<Footer/>
			</div>
		);
	}
}

export default Home;