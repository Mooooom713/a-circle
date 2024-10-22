import React from 'react';
import './style.css';
import ArticleBlock from '../../../../../components/articleBlock';
import ReadMore from '../../../../../components/readMore';
import ArticleDetail from './articleDerail';
import BlockConfig from '../../../../../common/famous-block-config';
import moment from 'moment';
import { map } from 'lodash';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FAMOUS_NAVTO_DETAIL, FAMOUS_SAVE_DATA } from '../../../../../store/actionType';
import AlertBox from '../../../../../components/alertBox';
import contentListZH from '../../../../../common/content-list';
import ArticlePlaceHolder from '../../../../../components/articlePlaceholder';
import fetchUrl from '../../../../../common/collection-fetch-url';

class Detail extends React.Component{

    constructor(props){
        super(props);
        let pathname = props.location.pathname;
        let url = /[0-9]/.test(pathname) ? pathname.substring(0, pathname.length-2): pathname;

        this.state = {
            linkUrl: url,
            readmore: false,
            isScroll: false,
            isOpen: {
                display: 'none'
            }
        };

    }

    /**
     * 名师堂详情页渲染文章摘要块判断逻辑
     */
    renderArticleBlock(){
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
                        navToArticle={(data) => {
                            this.props.navToArticle(data);
                        }}
                        path={`${this.state.linkUrl}/${index}`}
                        data={item}
                        title={item.title}
                        time={moment(item.created_at).format('YYYY-MM-DD hh:mm:ss')}
                        subTitle={item.site.desc}/>
            </div>;
        });
    }


    /**
     * 处理read more逻辑
     */
    _handleReadMore(){
        this.setState({
            readmore: true
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
    renderDetailContent(){
        const block = this.renderArticleBlock();
        return (<div className='famousDetailWrap'>
            <div className='famousDetailContent'>
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
                            this._handleReadMore();
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
     * 渲染单个文章详情
     */
    renderArticleDetail(){
        return <ArticleDetail data={this.props.data}/>;
    }

    renderPlaceHolder(){
        return <ArticlePlaceHolder/>;
    }

    /**
     * 通过钩子函数优化性能
     * @param {Object} nextProps 
     * @param {Object} nextState 
     */
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.data !== this.state.data || nextState.readmore !== this.state.readmore){
          return true;
        }
        return false;
    }


    /**
     * 主要负责渲染的函数
     */
    render(){
        return (<Switch>
            <Route
                path={this.state.linkUrl}
                exact
                component={() => {
                    if(this.state.data){
                        return this.renderDetailContent();
                    }else{
                        return this.renderPlaceHolder();
                    }
                }}/>
            <Route 
                path={`${this.state.linkUrl}/:number`} 
                component={() => this.renderArticleDetail()}/>
        </Switch>);
    }

    /**
     * 组件挂载到dom之后发起异步请求
     */
    componentDidMount(){      
        const id = this.props.location.search.split('=')[1];
        if(!id) return;
        if(!(this.props.username && this.props.userid)){
            this.props.history.push('/login');
        }else{
            this.props.changePageTitle(this.props);
        }
        const queryOption = BlockConfig.detailConfig[id].queryOption;
        let myOption = {
            method: 'GET',
            mode: "cors",
            header: {
                Accept: "application/json"
            }
        };
        fetch(fetchUrl.getFamousArticle(queryOption.count, queryOption.page), myOption)
        .then(res => res.json())
        .then((res) => {
            if(res.results.length > 2){
                this.setState({
                    isScroll: true,
                    data: res.results
                });
            }else{
                this.setState({
                    data: res.results
                });
            }
        })
        .catch((mes) => {
            this.setState({
                isOpen: {
                    display: 'flex'
                },
                mesg: contentListZH.REQUEST_EXCEPTION 
            });
        });
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.famousConfig.data,
        username: state.username,
        userid: state.userid
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        /**
         * 改变title
         * @param {Object} props 
         */
        changePageTitle(props){
            let index = props.location.search.split('=')[1];
            const action = {
                type: FAMOUS_NAVTO_DETAIL,
                pageTitle: BlockConfig.detailConfig[index].pageTitle
            };
            dispatch(action);
        },
        navToArticle(data){
            const action = {
                type: FAMOUS_SAVE_DATA,
                data: data
            };
            dispatch(action);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));