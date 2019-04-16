import React from 'react';
import './style.css';
import contentListZH from '../../../../common/content-list';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import fetchUrl from '../../../../common/collection-fetch-url';
import { CLUB_CHANGE_ALERTDATA } from '../../../../store/actionType';

class InputArea extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            areaValue: ''
        };
    }

    addComment(){
        if(this.props.username && this.props.userid && this.state.areaValue){
            let myOption = {
                method: 'GET'
            };
            fetch(fetchUrl.commentAdd(this.props.userid, this.state.areaValue), myOption)
            .then(res => res.json())
            .then(json => {
                let mesg = contentListZH.CLUB_PUBLISH_SUCCESS;
                let isOpen = {
                    display: 'flex'
                };
                
                this.props.handleChangeMesg(mesg, isOpen, false);
            })
            .catch(mesg => {
                let error = contentListZH.CLUB_PUBLISH_FAILED;
                let isOpen = {
                    display: 'flex'
                };
                
                this.props.handleChangeMesg(error, isOpen, false);
            });
        }
        if(!this.props.username && !this.props.userid){
            this.props.history.push('/login');
        }
    }


    handleSaveData(e){
        let value = e.target.value;

        this.setState({
            areaValue: value
        });
    }


    render(){
        return (<div className='inputareaWrap'>
            <textarea
                onChange={(e) => {
                    this.handleSaveData(e);
                }}
                value={this.state.areaValue}
                className='textareaStyle' 
                placeholder={contentListZH.CLUB_PLACEHOLDER}
                maxLength='200'/>
            <div>
                <button
                    className='inputareaBtn'
                    onClick={() => {
                        this.addComment();
                        this.setState({
                            areaValue: ''
                        });
                    }}>
                    {contentListZH.CLUB_BUTTON_TEXT}
                </button>
            </div>
        </div>);
    }


}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        userid: state.userid,
        isClose: state.clubConfig.isClose
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navToLogin(props){
            props.history.push('/login');
        },
        handleChangeMesg(mesg, isOpen, isClose){
            const action = {
                type: CLUB_CHANGE_ALERTDATA,
                mesg: mesg,
                isOpen: isOpen,
                isClose: isClose
            };
            dispatch(action);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InputArea));