import * as ActionTypes from './actionType';
import { assign } from 'lodash';

const defaultSate = {
    urlArr: [],
    nowUrl: window.location.pathname,
    studioConfig: {
        index: 0,
        pageTitle: [
            require('../img/font/studioTitle.png')
        ]
    },
    famousConfig: {
        index: 0,
        pageTitle: [
            require('../img/font/famousTitle.png')
        ],
        articleNavTo: false,
        childrenPageTitle: require('../img/font/famousModel/famousDetail.png'),
        data: []
    }
};

export default (state = defaultSate, action) => {
    //HOME
    if( action.type === ActionTypes.HOME_TO_DETAIL_BLOCK ){
        let newState = assign({}, state);
        newState.urlArr.push(action.prePath);
        newState.nowUrl = action.nowPath;
        return newState;
    }

    //STUDIO
    if(action.type === ActionTypes.STUDIO_NAVTO_DETAIL){
        let newState = assign({}, state);
        newState.urlArr.push(state.nowUrl);
        newState.nowUrl = action.navPath;
        newState.studioConfig.pageTitle.push(action.pageTitle);
        newState.studioConfig.index++;
        return newState;
    }

    if(action.type === ActionTypes.STUDIO_GO_BACK){
        let newState = assign({}, state);
        newState.nowUrl = newState.urlArr[newState.urlArr.length-1];
        newState.urlArr.pop();
        newState.studioConfig.index--;
        newState.studioConfig.pageTitle.pop();
        return newState;
    }

    //FAMOUS
    if(action.type === ActionTypes.FAMOUS_NAVTO_DETAIL){
        let newState = assign({}, state);
        newState.urlArr.push(state.nowUrl);
        newState.nowUrl = action.navPath;
        newState.famousConfig.pageTitle.push(action.pageTitle);
        newState.famousConfig.index++;
        return newState;
    }

    if(action.type === ActionTypes.FAMOUS_NAVTO_ARTICLE){
        let newState = assign({}, state);
        newState.urlArr.push(state.nowUrl);
        newState.nowUrl = action.navPath;
        newState.famousConfig.articleNavTo = action.articleNavTo;
        newState.famousConfig.pageTitle.push(newState.famousConfig.childrenPageTitle);
        newState.famousConfig.index++;
        newState.famousConfig.data = action.data;
        return newState;
    }

    if(action.type === ActionTypes.FAMOUS_GO_BACK){
        let newState = assign({}, state);
        newState.nowUrl = newState.urlArr[newState.urlArr.length-1];
        newState.urlArr.pop();
        newState.famousConfig.index--;
        newState.famousConfig.pageTitle.pop();
        newState.famousConfig.articleNavTo = action.articleNavTo;
        return newState;
    }

    return state;
};