const fetchUrl = {
    //famous
    getFamousArticle: (count, page) => {
        return `http://gank.io/api/xiandu/data/id/appinn/count/${count}/page/${page}`;
    },

    //gaokao
    getGaokaoArticle: () => {
        return 'http://gank.io/api/xiandu/data/id/appinn/count/3/page/5';
    },

    //club
    commentList: () => {
        return 'http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=123';
    },
    commentAdd: (userid, content) => {
        return `http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=${userid}&uniquekey=123&commnet=${content}`;
    },
    //login
    login: (username, password) => {
        return `http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=${username}&password=${password}&r_userName=undefine&r_password=undefine&r_confirmPassword=undefine`;
    },
    register: (username, password, comfirmPassword) => {
        return `http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=undefine&password=undefine&r_userName=${username}&r_password=${password}&r_confirmPassword=${comfirmPassword}`;
    },
    //user
    getcomments: (userid) => {
        return `http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=${userid}`;
    }
};

export default fetchUrl;