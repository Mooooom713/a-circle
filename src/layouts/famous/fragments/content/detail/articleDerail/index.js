import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FAMOUS_NAVTO_ARTICLE } from '../../../../../../store/actionType';

class ArticleDetail extends React.Component{


    shouldComponentUpdate(nextProps){
        if(nextProps.data === this.props.data){
            return false;
        }
        return true;
    }

    render(){
        const { data } = this.props;
        let str = data ? data.content.replace(/&lt;/g, '<') : '';
        str = str ? str.replace(/&gt;/g, '>') : str;
        
        return (<div className='articleContentWrap'>
            <h2>{data.title}</h2>
            <div 
                className='textArticleWrap' 
                dangerouslySetInnerHTML={{__html:str}}/>
        </div>);
    }

    componentDidMount(){
        this.props.changeArticlePageTitle();
    }
}

const mapDispatchToProps = (dispatch) => {
    return {     
        changeArticlePageTitle(){
            const action = {
                type: FAMOUS_NAVTO_ARTICLE
            };
            dispatch(action);
        }
    };
};

export default connect(null, mapDispatchToProps)(withRouter(ArticleDetail));