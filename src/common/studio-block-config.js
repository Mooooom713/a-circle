/*
 * @Author: Joie Qin 
 * @Date: 2019-03-25 11:00:18 
 * @Last Modified by: Joie Qin
 * @Last Modified time: 2019-04-15 14:40:36
 */

let BlockConfig = {
    routeConfig: [{
            name: 'watercolor',
            index: 0
        },
        {
            name: 'oilpainting',
            index: 1
        },
        {
            name: 'cartoon',
            index: 2
        },
        {
            name: 'sketch',
            index: 3
        },
        {
            name: 'literary',
            index: 4
        },
        {
            name: 'traditional',
            index: 5
        }
    ],
    contentConfig: [{
            wrapStyle: {
                display: 'inline-block',
                width: '240px',
                height: '160px',
                background: 'linear-gradient(#ffffff, #b3e0ff)'
            },
            blockStyle: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            imgSrc: require('../img/font/studioModel/shuicai.png'),
            path: '/studio/watercolor'
        },
        {
            wrapStyle: {
                display: 'inline-block',
                width: '240px',
                height: '160px',
                background: 'linear-gradient(#ffffff, #90bdf7)',
                marginLeft: '40px'
            },
            blockStyle: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            imgSrc: require('../img/font/studioModel/youhua.png'),
            path: '/studio/oilpainting'
        },
        {
            wrapStyle: {
                display: 'inline-block',
                width: '240px',
                height: '160px',
                background: 'linear-gradient(#ffffff, #7298de)',
                marginLeft: '40px'
            },
            blockStyle: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            imgSrc: require('../img/font/studioModel/manhua.png'),
            path: '/studio/cartoon'
        },
        {
            wrapStyle: {
                display: 'inline-block',
                width: '240px',
                height: '160px',
                background: 'linear-gradient(#566ba7, #ffffff)'
            },
            blockStyle: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            imgSrc: require('../img/font/studioModel/suxie.png'),
            path: '/studio/sketch'
        },
        {
            wrapStyle: {
                display: 'inline-block',
                width: '240px',
                height: '160px',
                background: 'linear-gradient(#566ba7, #ffffff)',
                marginLeft: '40px'
            },
            blockStyle: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            imgSrc: require('../img/font/studioModel/sumiao.png'),
            path: '/studio/literary'
        },
        {
            wrapStyle: {
                display: 'inline-block',
                width: '240px',
                height: '160px',
                background: 'linear-gradient(#383f55, #ffffff)',
                marginLeft: '40px'
            },
            blockStyle: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            imgSrc: require('../img/font/studioModel/guohua.png'),
            path: '/studio/traditional'
        }
    ],
    detailConfig: [
        {
            pageTitle: require('../img/font/studioModel/studioShuicaiTitle.png'),
            queryUrl: '../mock/shuicai.json'
        },
        {
            pageTitle: require('../img/font/studioModel/studioYouhuaTitle.png'),
            queryUrl: '../mock/youhua.json'
        },
        {
            pageTitle: require('../img/font/studioModel/studioManhuaTitle.png'),
            queryUrl: '../mock/manhua.json'
        },
        {
            pageTitle: require('../img/font/studioModel/studioSuxieTitle.png'),
            queryUrl: '../mock/suxie.json'
        },
        {
            pageTitle: require('../img/font/studioModel/studioSumiaoTitle.png'),
            queryUrl: '../mock/sumiao.json'
        },
        {
            pageTitle: require('../img/font/studioModel/studioGuohuaTitle.png'),
            queryUrl: '../mock/guohua.json'
        }
    ]
};

export default BlockConfig;