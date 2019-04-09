import React from 'react';
import './style.css';
import InputArea from './inputArea';
import MessageArea from './messageArea';
import ReadMore from '../../../components/readMore';
import fetchUrl from '../../../common/collection-fetch-url';
import { map } from 'lodash';

class Content extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            data:[],
            showData: [],
            showCount: 0
        };
    }

    handleReadMore(){
        const showCount = this.state.data.length - this.state.showCount > 4 ? this.state.showCount + 4 : this.state.showCount + (this.state.data.length - this.state.showCount);
        const showData = this.state.data.slice(0, showCount);
        this.setState({
            showCount: showCount,
            showData: showData
        });
    }

    renderComment(){
        return map(this.state.showData, (item, index) => {
            return <MessageArea 
                key={index}
                UserName={item.UserName}
                datetime={item.datetime}
                Comments={item.Comments}/>;
        });
    }

    render(){
        const commentContent = this.state.data.length > 0 ? this.renderComment() : null;
        return (<div className='clubDerailWrap'>
            <div className='clubContentWrap'>
                <InputArea/>  
                {commentContent}
                {
                    this.state.data.length > 1 && (this.state.showCount !== this.state.data.length)?
                    <ReadMore
                        wrapStyle={{
                            width: '50%',
                            height: '3rem',
                            marginTop: '1.4rem',
                            marginBottom: '2rem'
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
        let myOption = {
            method: 'GET'
        };
        fetch(fetchUrl.commentList, myOption)
        .then(res => res.json())
        .then(json => {
            const showData = json.length > 1 ? json.slice(0, 1) : json;
            this.setState({
                data: json,
                showData: showData,
                showCount: showData.length
            });
        })
        .catch((mesg) => {
            alert(mesg);
        });
    }
}

export default Content;