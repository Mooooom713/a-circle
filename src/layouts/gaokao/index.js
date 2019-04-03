import React from 'react';
import './style.css';
import CommonHeader from '../../components/commonHeader';
import { connect } from 'react-redux';

class GaoKao extends React.Component{
    render(){
        return (<div className='gaokaoWrap'>
            <CommonHeader
				backImg={require('../../img/icon/back.png')}
				userImg={require('../../img/signin.png')}
				pageTitle={this.props.pageTitle}
				goBack={()=>{
					this.props.goBack(this.props);
				}}/>
        </div>);
    }

    componentDidMount(){
        let myOption = {
            method: 'GET',
            mode: 'cors'
        };
        fetch('http://gank.io/api/xiandu/data/id/appinn/count/3/page/5', myOption)
        .then(res => res.json())
        .then((res) => {
            console.log(res);
        })
        .catch((mesg) => {
            alert(mesg);
        });
    }
}

const mapStateToProps = (state) => {
    return {
        pageTitle: state.gaokaoConfig.pageTitle[state.gaokaoConfig.index],
        nowUrl: state.nowUrl
    };
};


export default connect(mapStateToProps, null)(GaoKao);