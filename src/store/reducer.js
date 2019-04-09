import * as ActionTypes from './actionType';
import { assign } from 'lodash';

const defaultSate = {
    username: localStorage.username ? localStorage.username : '',
    userid: localStorage.userid ? localStorage.userid : '',
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
        ]
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

    //Sign in
    if(action.type === ActionTypes.SIGNIN_LOGIN_STATUS_CHANGE){
        let newState = assign({}, state);
        newState.username = action.username;
        newState.userid = action.userid;
        return newState;
    }

    return state;
};