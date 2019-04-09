const fetchUrl = {
    //club
    commentList: 'http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=1',
    //login
    login: (username, password) => {
        return `http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=${username}&password=${password}&r_userName=undefine&r_password=undefine&r_confirmPassword=undefine`;
    },
    register: (username, password, comfirmPassword) => {
        return `http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=undefine&password=undefine&r_userName=${username}&r_password=${password}&r_confirmPassword=${comfirmPassword}`;
    }
};

export default fetchUrl;