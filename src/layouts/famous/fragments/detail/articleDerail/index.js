import React from 'react';
import './style.css';

class ArticleDetail extends React.Component{

    render(){
        const { data } = this.props;
        let str = data.content.replace(/&lt;/g, '<');
        str = str.replace(/&gt;/g, '>');
        
        return (<div className='articleContentWrap'>
            <h2>{data.title}</h2>
            <div 
                className='textArticleWrap' 
                dangerouslySetInnerHTML={{__html:str}}/>
        </div>);
    }
}

export default ArticleDetail;