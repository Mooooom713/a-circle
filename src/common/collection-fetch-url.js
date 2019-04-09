const fetchUrl = {
    //club
    commentList: 'http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=1',
    //login
    login: (username, password) => {
        return `http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=${username}&password=${password}&r_userName=undefine&r_password=undefine&r_confirmPassword=undefine`;
    }
};

export default fetchUrl;