let BlockConfig = {
    routeConfig: [
        {
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
            name: 'literarysketch',
            index: 4
        },
        {
            name: 'traditional',
            index: 5
        }
    ],
    contentConfig: [
        {
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
            path: '/studio/literarysketch'
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
    ]
};

export default BlockConfig;