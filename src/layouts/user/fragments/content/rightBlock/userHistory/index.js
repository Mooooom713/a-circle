import React from 'react';
import fetchUrl from '../../../../../../common/collection-fetch-url';
import { connect } from 'react-redux';
import contentListZH from '../../../../../../common/content-list';
import './style.css';
import { map } from 'lodash';
import AlertBox from '../../../../../../components/alertBox';

class UserHistory extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            comments: [],
            pages: 0,
            nowPage: 0,
            isOpen: {
                display: 'none'
            },
            mesg: ''
        };
    }

    renderNoData(){
        return (<p>
            {contentListZH.USER_COMMENT_NODATA}
        </p>);
    }

    prePage(){
        let nowPage = this.state.nowPage;
        nowPage--;
        let comment = this.state.data.slice((nowPage - 1) * 5, (this.state.nowPage - 1) * 5);
        this.setState({
            nowPage: nowPage,
            comments: comment
        });
    }

    nextPage(){
        let nowPage = this.state.nowPage;
        nowPage++;
        let comment = this.state.data.slice(this.state.nowPage * 5, nowPage * 5);
        this.setState({
            nowPage: nowPage,
            comments: comment
        });
    }

    renderComments(){
        if(this.state.pages > 1){
            let pre = '<';
            let next = '>';
            return (<div className='commentsWrap'>
                <div>
                    <button 
                        disabled={this.state.nowPage === 1 ? true : false}
                        onClick={() => {
                            this.prePage();
                        }}>
                        {pre}
                    </button>
                </div>
                <div>
                    {
                        map(this.state.comments, (item, index) => {
                            let comment = item.Comments.length > 50 ? `${item.Comments.slice(0, 50)}...` : item.Comments;
                            return (<p key={index}>
                                {`${comment} (${item.datetime})`}
                            </p>);
                        })
                    }
                </div>
                <div>
                    <button
                        disabled={this.state.nowPage === this.state.pages ? true : false}
                        onClick={() => {
                            this.nextPage();
                        }}>
                        {next}
                    </button>
                </div>
            </div>);
        }else{
            return (<div className='commentWrap'>
                {
                    map(this.state.comments, (item, index) => {
                        let comment = item.Comments.length > 50 ? `${item.Comments.slice(0, 50)}...` : item.Comments;
                        return (<p key={index}>
                            {`${comment} (${item.datetime})`}
                        </p>);
                    })
                }
            </div>);
        }
    }


    clickClose(){
        this.setState({
            isOpen: {
                display: 'none'
            },
            mesg: ''
        });
    }

    render(){
        const content = this.state.comments.length > 0 ? this.renderComments() : this.renderNoData();
        return (<div className='userhistoryWrap'>
            {content}
            <AlertBox
                isOpen={this.state.isOpen} 
                text={this.state.mesg}
                clickClose={() => {
                    this.clickClose();
                }}
                clickOK={() => {
                    this.clickClose();
                }}
            />
        </div>);
    }


    componentDidMount(){
        let myOption = {
            method: 'GET'
        };
        fetch(fetchUrl.getcomments(this.props.userid), myOption)
        .then(res => res.json())
        .then(json => {
            json = json.reverse();
            if(json.length > 0 && json.length > 5){
                this.setState({
                    data: json,
                    comments: json.slice(0, 5),
                    pages: Math.ceil(json.length / 5),
                    nowPage: 1
                });
            }else if(json.length > 0){
                this.setState({
                    comments: json,
                    pages: 1,
                    nowPage: 1
                });
            }
        })
        .catch(mesg => {
            let error = contentListZH.REQUEST_EXCEPTION;
            let isOpen = {
                display: 'flex'
            };
            this.setState({
                isOpen: isOpen,
                mesg: error
            });
        });
    }

}

const mapStateToProps = (state) => {
    return {
        userid: state.userid
    };
};


export default connect(mapStateToProps, null)(UserHistory);