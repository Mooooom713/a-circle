import React from 'react';
import './style.css';
import ArticleBlock from '../../../../components/articleBlock';
import ReadMore from '../../../../components/readMore';
import ArticleDetail from './articleDerail';
import moment from 'moment';
import { map } from 'lodash';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FAMOUS_NAVTO_ARTICLE } from '../../../../store/actionType';

class Detail extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            readmore: false,
            isScroll: false,
            scrollTop: {
                marginTop: 0
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
                        navToArticle={(e, data) => {
                            this.props.navToArticle(e, data);
                        }}
                        path={`${this.props.nowUrl}/${index}`}
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
    handleReadMore(){
        this.setState({
            readmore: true,
            scrollTop: {
                marginTop: '2rem'
            }
        });
    }

    
    /**
     * 渲染详情主页
     */
    renderDetailContent(){
        const block = this.renderArticleBlock();
        return (<div className='famousDetailWrap'>
            <div className='articlesContent' style={this.state.scrollTop}>
                {block}
            </div>
            {
                !this.state.readmore && this.state.isScroll?
                <ReadMore
                    wrapStyle={{
                        width: '60%',
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


    /**
     * 渲染单个文章详情
     */
    renderArticleDetail(){
        return <ArticleDetail data={this.props.data}/>;
    }

    render(){
        return (<Switch>
            {
                this.props.articleNavTo ?
                <Route
                    path={this.props.nowUrl}
                    component={() => this.renderArticleDetail()}/>
                :
                <Route 
                    path={this.props.nowUrl} 
                    component={() => this.renderDetailContent()}/>
            }
        </Switch>);
    }

    componentDidMount(){
        if(!this.props.articleNavTo){
            let { queryObj } = this.props;
            if(!queryObj) return;
            let myOption = {
                method: 'GET',
                mode: "cors",
                header: {
                    Accept: "application/json"
                }
            };
            fetch(`http://gank.io/api/xiandu/data/id/appinn/count/${queryObj.count}/page/${queryObj.page}`, myOption)
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
                alert(mes);
            });
        }  
    }
}

const mapStateToProps = (state) => {
    return {
        articleNavTo: state.famousConfig.articleNavTo,
        nowUrl: state.nowUrl,
        data: state.famousConfig.data
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        /**
         * 跳转到单个文章详情
         * @param {string} path 
         */
        navToArticle(path, data){
            const action = {
                type: FAMOUS_NAVTO_ARTICLE,
                navPath: path,
                articleNavTo: true,
                data: data
            };
            dispatch(action);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));