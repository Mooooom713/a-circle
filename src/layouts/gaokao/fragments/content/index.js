import React from 'react';
import './style.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { map } from 'lodash';
import moment from 'moment';
import ArticleBlock from '../../../../components/articleBlock';
import ReadMore from '../../../../components/readMore';
import ArticleDetail from './detail';
import { GAOKAO_SAVE_DATA } from '../../../../store/actionType';
import { connect } from 'react-redux';
import AlertBox from '../../../../components/alertBox';
import contentListZH from '../../../../common/content-list';
import ArticlePlaceHolder from '../../../../components/articlePlaceholder';
import fetchUrl from '../../../../common/collection-fetch-url';

class Content extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            readmore: false,
            isScroll: false,
            isOpen: {
                display: 'none'
            }
        };
    }

    renderLogicContent(){
        if(!this.state.readmore){
            if(this.state.isScroll){
                let sArr = this.state.data ? this.state.data.slice(0, 2) : [];
                return this.renderPartArticle(sArr);
            }else{
                return this.renderPartArticle(this.state.data);
            }
        }else{
            return this.renderPartArticle(this.state.data);
        }
    }

    /**
     * 名师堂渲染单个摘要块
     * @param {Object} sArr 
     */
    renderPartArticle(sArr){
        return map(sArr, (item, index) => {
            return <div 
                key={index} 
                className='articlesWrap'>
                    <ArticleBlock
                        imgSrc={item.site.icon}
                        path={`/gaokao/${index}`}
                        data={item}
                        navToArticle={(data) =>{
                            this.props.saveData(data);
                        }}
                        title={item.title}
                        time={moment(item.created_at).format('YYYY-MM-DD hh:mm:ss')}
                        subTitle={item.site.desc}/>
            </div>;
        });
    }

    clickClose(){
        this.setState({
            isOpen: {
                display: 'none'
            }
        });
    }

    /**
     * 渲染详情主页
     */
    renderContent(){
        const block = this.renderLogicContent();
        return (<div className='gaokaoDetailWrap'>
            <div className='gaokaoDetailContent'>
                <div className='articlesContent'>
                    {block}
                </div>
                {
                    !this.state.readmore && this.state.isScroll?
                    <ReadMore
                        wrapStyle={{
                            width: '58%',
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
                            this._handleReadMore(this.state.data);
                        }}/>
                    :
                    null
                }
            </div>
            <AlertBox 
                isOpen={this.state.isOpen} 
                text={this.state.mesg}
                clickClose={() => {
                    this.clickClose();
                }}
                clickOK={() => {
                    this.clickClose();
                }}/>
        </div>);
    }

    /**
     * 处理read more逻辑
     */
    _handleReadMore(){
        this.setState({
            readmore: true
        });
    }

    renderDetail(){
        return <ArticleDetail />;
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.data !== this.state.data){
            return true;
        }else if(nextState.readmore !== this.state.readmore){
            return true;
        }
        return false;
    }

    renderPlaceHolder(){
        return <ArticlePlaceHolder/>;
    }

    render(){
        return (<Switch>
            <Route path='/gaokao' exact component={() => {
                if(this.state.data){
                    return this.renderContent();
                }else{
                    return this.renderPlaceHolder();
                }
            }}/>
            <Route path='/gaokao/:id' exact component={() => this.renderDetail()}/>
        </Switch>);
    }

    componentDidMount(){
        let myOption = {
            method: 'GET',
            mode: 'cors'
        };
        fetch(fetchUrl.getGaokaoArticle(), myOption)
        .then(res => res.json())
        .then((json) => {
            let data = json.results;
            this.setState({
                rowNumber: Math.ceil(data.length / 3),
                data: data,
                isScroll: data.length > 2
            });
        })
        .catch((mesg) => {
            this.setState({
                isOpen: {
                    display: 'flex'
                },
                mesg: contentListZH.REQUEST_EXCEPTION 
            });
        });
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveData(data){
            const action = {
                type: GAOKAO_SAVE_DATA,
                data: data
            };
            dispatch(action);
        }
    };
};

export default connect(null, mapDispatchToProps)(withRouter(Content));