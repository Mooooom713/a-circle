import React from 'react';
import contentListZH from '../../../../common/content-list';
import  './style.css';

class Footer extends React.Component{
    render(){
        return (<div className='footerWrap'>
            <span>{contentListZH.HOME_FOOTER_Design}</span>
            <span>{contentListZH.HOME_FOOTER_Auhor}</span>
            <span>{contentListZH.HOME_FOOTER_Common}</span>
        </div>);
    }
}

export default Footer;