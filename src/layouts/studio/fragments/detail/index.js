/*
 * @Author: Joie Qin 
 * @Date: 2019-03-25 11:04:16 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-04-01 17:40:28
 */
import React from 'react';
import './style.css';
import ReadMore from '../../../../components/readMore';
import VideoCard from '../../../../components/videoCard';
import { forEach } from 'lodash';

class Detail extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            rowNumber: 0,
            readmore: false,
            isScoll:{
                marginTop : 0
            }
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
            readmore:true,
            isScoll: {
                marginTop: '2rem'
            }
        });
    }

    render(){
        const cards = this.renderRowCard();
        return (<div className='studioDetailWrap'>
            <div className='cardsWrap' style={this.state.isScoll}>
                { cards }
            </div>
            {
                this.state.rowNumber > 2 && !this.state.readmore?
                <ReadMore
                    wrapStyle={{
                        width: '47rem',
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
            
        </div>);
    }

    componentDidMount(){
        const { queryUrl } = this.props;
        if(!queryUrl) return;
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

export default Detail;