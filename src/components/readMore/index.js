/*
 * @Author: Joie Qin 
 * @Date: 2019-03-25 10:46:27 
 * @Last Modified by:   Joie Qin 
 * @Last Modified time: 2019-03-25 10:46:27 
 */
import React from 'react';

class ReadMore extends React.Component{
    render(){
        const {wrapStyle, imgWrap, imgStyle, imgSrc} = this.props;
        return (<div style={wrapStyle}>
            <div style={imgWrap}>
                <img style={imgStyle} src={imgSrc}/>
            </div>
        </div>);
    }
}

export default ReadMore;
