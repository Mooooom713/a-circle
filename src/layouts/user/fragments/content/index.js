import React from 'react';
import './style.css';
import LeftBlock from './leftBlock';
import RightBlock from './rightBlock';
import contentListZH from '../../../../common/content-list';

const Content = (props) => {
    const listConfig = [
        contentListZH.USER_LIST_USERINFO,
        contentListZH.USER_LIST_USERCOMMENT_HISTORY
    ];
    return (<div className='userCotentWrap'>
        <span>
            <LeftBlock listConfig={listConfig}/>
        </span>
        <span>
            <RightBlock/>
        </span>
    </div>);
};

export default Content;