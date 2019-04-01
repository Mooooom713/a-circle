/*
 * @Author: Joie Qin 
 * @Date: 2019-03-25 11:00:18 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-03-27 23:27:14
 */

let BlockConfig = {
    routeConfig: [{
            name: 'vangogh',
            index: 0
        },
        {
            name: 'vinci',
            index: 1
        },
        {
            name: 'picasso',
            index: 2
        },
        {
            name: 'zhangdaqian',
            index: 3
        },
        {
            name: 'qibaishi',
            index: 4
        },
        {
            name: 'xubeihong',
            index: 5
        }
    ],
    contentConfig: [{
            wrapStyle: {
                display: 'inline-block',
                width: '240px',
                height: '160px',
                background: '#eec43e'
            },
            blockStyle: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            imgSrc: require('../img/font/fangao.png'),
            path: '/famous/vangogh'
        },
        {
            wrapStyle: {
                display: 'inline-block',
                width: '240px',
                height: '160px',
                background: '#eeb32b',
                marginLeft: '40px'
            },
            blockStyle: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            imgSrc: require('../img/font/dafenqi.png'),
            path: '/famous/vinci'
        },
        {
            wrapStyle: {
                display: 'inline-block',
                width: '240px',
                height: '160px',
                background: '#efad3f',
                marginLeft: '40px'
            },
            blockStyle: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            imgSrc: require('../img/font/bijiasuo.png'),
            path: '/famous/picasso'
        },
        {
            wrapStyle: {
                display: 'inline-block',
                width: '240px',
                height: '160px',
                background: '#eba72c'
            },
            blockStyle: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            imgSrc: require('../img/font/zhangdaqian.png'),
            path: '/famous/zhangdaqian'
        },
        {
            wrapStyle: {
                display: 'inline-block',
                width: '240px',
                height: '160px',
                background: '#ea822b',
                marginLeft: '40px'
            },
            blockStyle: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            imgSrc: require('../img/font/qibaishi.png'),
            path: '/famous/qibaishi'
        },
        {
            wrapStyle: {
                display: 'inline-block',
                width: '240px',
                height: '160px',
                background: '#e26a1e',
                marginLeft: '40px'
            },
            blockStyle: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            imgSrc: require('../img/font/xubeihong.png'),
            path: '/famous/xubeihong'
        }
    ],
    detailConfig: [
        {
            pageTitle: require('../img/font/famousModel/famousFangao.png'),
            '/famous/vangogh': {
                count: 10,
                page: 1
            }
        },
        {
            pageTitle: require('../img/font/famousModel/famousDafenqi.png'),
            '/famous/vinci': {
                count: 1,
                page: 2
            }
        },
        {
            pageTitle: require('../img/font/famousModel/famousBijiasuo.png'),
            '/famous/picasso': {
                count: 2,
                page: 3
            }
        },
        {
            pageTitle: require('../img/font/famousModel/famousZhangdaqian.png'),
            '/famous/zhangdaqian': {
                count: 3,
                page: 4
            }
        },
        {
            pageTitle: require('../img/font/famousModel/famousQibaishi.png'),
            '/famous/qibaishi': {
                count: 16,
                page: 5
            }
        },
        {
            pageTitle: require('../img/font/famousModel/famousXubeihong.png'),
            '/famous/xubeihong': {
                count: 50,
                page: 6
            }
        }
    ]
};

export default BlockConfig;