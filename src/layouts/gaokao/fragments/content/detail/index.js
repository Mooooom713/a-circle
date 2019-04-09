import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { GAOKAO_NAVTO_ARTICLE } from '../../../../../store/actionType';

class ArticleDetail extends React.Component{

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.data !== this.props.data){
            return true;
        }
        return false;
    }

    render(){
        let str = this.props.data ? this.props.data.content.replace(/&lt;/g, '<') : '';
        str = str ? str.replace(/&gt;/g, '>') : str;
        
        return (<div className='articleContentWrap'>
            <div className='articleContent'>
                <h2>{this.props.data ? this.props.title : ''}</h2>
                <div 
                    className='textArticleWrap' 
                    dangerouslySetInnerHTML={{__html:str}}/>
            </div>
        </div>);
    }

    componentDidMount(){
        this.props.changeArticlePageTitle();
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.gaokaoConfig.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {     
        changeArticlePageTitle(){
            const action = {
                type: GAOKAO_NAVTO_ARTICLE
            };
            dispatch(action);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleDetail));