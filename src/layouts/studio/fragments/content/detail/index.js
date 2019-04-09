/*
 * @Author: Joie Qin 
 * @Date: 2019-03-25 11:04:16 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-04-09 12:22:11
 */
import React from 'react';
import './style.css';
import ReadMore from '../../../../../components/readMore';
import VideoCard from '../../../../../components/videoCard';
import { forEach } from 'lodash';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BlockConfig from '../../../../../common/studio-block-config';
import { STUDIO_NAVTO_DETAIL } from '../../../../../store/actionType';

class Detail extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            rowNumber: 0,
            readmore: false
        };
    }

    renderRowCard(){
        let arr = [];
        if(!this.state.readmore){
            forEach(this.state.showData, (item, index) => {
                arr.push(<VideoCard key={index} videoSrc={item.url} detailTitle={item.title}/>);
            });

            return this.renderInitPartRow(arr);
        }else{
            forEach(this.state.data, (item, index) => {
                arr.push(<VideoCard key={index} videoSrc={item.url} detailTitle={item.title}/>);
            });

            return this.renderPartRow(arr);
        }
    }

    renderInitPartRow(arr){
        if(arr.length > 3){
            let part01 = arr.slice(0, 3);
            let part02 = arr.slice(3, arr.length);
            return <div>
                <div className='partRowStyle'>
                    {part01}
                </div>
                <div className='partRowStyle'>
                    {part02}
                </div>
            </div>;
        }else{
            return <div className='partRowStyle'>
                {arr}
            </div>;
        }
    }

    renderPartRow(arr){
        let num = parseInt(arr.length/3, 10);
        let wrap = [];
        for(let i = 0; i < num; i++){
            let sArr = arr.slice(3*i, 3*i + 3);
            wrap.push(<div className='partRowStyle'>
                {sArr}
            </div>);
        }
        if(arr.length % 3 === 0){    
            return wrap;
        }else{
            let sArr = arr.slice(num*3, arr.length);
            wrap.push(<div className='partRowStyle'>
                {sArr}
            </div>);
            return wrap;
        }  
    }

    handleReadMore(){
        this.setState({
            readmore:true
        });
    }

    render(){
        const cards = this.renderRowCard();
        return (<div className='studioDetailWrap'>
            <div className='studioDetailContent'>
                <div className='cardsWrap'>
                    { cards }
                </div>
                {
                    this.state.rowNumber > 2 && !this.state.readmore?
                    <ReadMore
                        wrapStyle={{
                            width: '59rem',
                            height: '3rem'
                        }}
                        imgWrap={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        handleReadMore={() => {
                            this.handleReadMore();
                        }}/>
                    :
                    null
                }
            </div>
        </div>);
    }

    componentDidMount(){
        this.props.changePageTitle(this.props);
        const id = this.props.location.search.split('=')[1];
        const queryUrl = BlockConfig.detailConfig[id].queryUrl;
        let myOption = {
            method: 'GET'
        };
        fetch(queryUrl, myOption)
        .then(res => res.json())
        .then((json) => {
            let data = json.d.result;
            let showData = data.length > 6 ? data.slice(0, 6):data;
            this.setState({
                rowNumber: Math.ceil(data.length / 3),
                data: data,
                showData: showData
            });
        })
        .catch((mesg) => {
            alert(mesg);
        });
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        /**
         * 改变title
         * @param {Object} props 
         */
        changePageTitle(props){
            let index = props.location.search.split('=')[1];
            const action = {
                type: STUDIO_NAVTO_DETAIL,
                pageTitle: BlockConfig.detailConfig[index].pageTitle
            };
            dispatch(action);
        }
    };
};

export default connect(null, mapDispatchToProps)(withRouter(Detail));