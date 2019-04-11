import * as ActionTypes from './actionType';
import { assign } from 'lodash';

const defaultSate = {
    username: localStorage.aCircleUsername ? localStorage.aCircleUsername : '',
    userid: localStorage.aCircleUserid ? localStorage.aCircleUserid : '',
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
        childrenPageTitle: require('../img/font/famousDetail.png')
    },
    gaokaoConfig: {
        index: 0,
        pageTitle: [
            require('../img/font/gaokaoTitle.png')
        ],
        childrenPageTitle: require('../img/font/famousDetail.png')
    },
    clubConfig: {
        index: 0,
        pageTitle: [
            require('../img/font/clubTitle.png')
        ],
        mesg: '',
        isOpen: {
            display: 'none'
        },
        isClose: true
    },
    userConfig: {
        clickIndex: -1
    }
};

export default (state = defaultSate, action) => {

    //HOME
    if(action.type === ActionTypes.HOME_TO_DETAIL_BLOCK){
        let newState = assign({}, state);
        return newState;
    }

    //STUDIO
    if(action.type === ActionTypes.STUDIO_NAVTO_DETAIL){
        let newState = assign({}, state);
        newState.studioConfig.pageTitle.push(action.pageTitle);
        newState.studioConfig.index++;
        return newState;
    }

    if(action.type === ActionTypes.STUDIO_GO_BACK){
        let newState = assign({}, state);
        newState.studioConfig.index--;
        newState.studioConfig.pageTitle.pop();
        return newState;
    }

    //FAMOUS
    if(action.type === ActionTypes.FAMOUS_NAVTO_DETAIL){
        let newState = assign({}, state);
        newState.famousConfig.pageTitle.push(action.pageTitle);
        newState.famousConfig.index++;
        return newState;
    }

    if(action.type === ActionTypes.FAMOUS_NAVTO_ARTICLE){
        let newState = assign({}, state);
        newState.famousConfig.pageTitle.push(newState.famousConfig.childrenPageTitle);
        newState.famousConfig.index++;
        return newState;
    }

    if(action.type === ActionTypes.FAMOUS_GO_BACK){
        let newState = assign({}, state);
        newState.famousConfig.index--;
        newState.famousConfig.pageTitle.pop();
        return newState;
    }

    if(action.type === ActionTypes.FAMOUS_SAVE_DATA){
        let newState = assign({}, state);
        newState.famousConfig.data = action.data;
        return newState;
    }

    //GAOKAO
    if(action.type === ActionTypes.GAOKAO_GO_BACK){
        let newState = assign({}, state);
        newState.gaokaoConfig.index--;
        newState.gaokaoConfig.pageTitle.pop();
        return newState;
    }

    if(action.type === ActionTypes.GAOKAO_NAVTO_ARTICLE){
        let newState = assign({}, state);
        newState.gaokaoConfig.index++;
        newState.gaokaoConfig.pageTitle.push(newState.gaokaoConfig.childrenPageTitle);
        return newState;
    }

    if(action.type === ActionTypes.GAOKAO_SAVE_DATA){
        let newState = assign({}, state);
        newState.gaokaoConfig.data = action.data;
        return newState;
    }

    //Club
    if(action.type === ActionTypes.CLUB_CHANGE_ALERTDATA){
        let newState = assign({}, state);
        newState.clubConfig.mesg = action.mesg;
        newState.clubConfig.isOpen = action.isOpen;
        newState.clubConfig.isClose = action.isClose;
        return newState;
    }

    //Sign in
    if(action.type === ActionTypes.SIGNIN_LOGIN_STATUS_CHANGE){
        let newState = assign({}, state);
        newState.username = action.username;
        newState.userid = action.userid;
        return newState;
    }

    //User
    if(action.type === ActionTypes.USER_CHANGE_RIGHTBLOCK){
        let newState = assign({}, state);
        newState.userConfig.clickIndex = action.clickIndex;
        return newState;
    }

    if(action.type === ActionTypes.USER_NAV_BACK){
        let newState = assign({}, state);
        newState.userConfig.clickIndex = action.clickIndex;
        return newState;
    }

    if(action.type === ActionTypes.USER_CLEAR_LOCAL_STORAGE){
        let newState = assign({}, state);
        newState.username = action.username;
        newState.userid = action.userid;
        return newState;
    }

    return state;
};