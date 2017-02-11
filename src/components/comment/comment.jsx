import React, {Component} from 'react';

import './comment.scss';

import Item from './item/item';

import img0 from '../../public/images/land/land-comment-img0.jpg';
import img1 from '../../public/images/land/land-comment-img1.jpg';
import img2 from '../../public/images/land/land-comment-img2.jpg';
import img3 from '../../public/images/land/land-comment-img3.jpg';
import img4 from '../../public/images/land/land-comment-img4.jpg';
import img5 from '../../public/images/land/land-comment-img5.jpg';

const data = [
    {
        imgSrc: img0,
        title: '爱.生命',
        goodNum: '798',
        itemCon: '游戏3D渲染出众，看得出是经过仔细打磨的作品，现在市面上这样用心做产品发产品，不浮躁不以圈钱为目的的游戏厂商不多了，值得一玩。'
    }, {
        imgSrc: img1,
        title: '彬0985_	',
        goodNum: '764',
        itemCon: '话说身为3年端游玩家今天才来玩……感觉很不错，操作手感很好，就是优化和端游有的一拼哈哈哈哈哈哈。'
    }, {
        imgSrc: img2,
        title: '点.骗人',
        goodNum: '805',
        itemCon: '我不是托，就是觉得游戏真的还不错，平民玩家也可以玩的很好，每天也不用花大量时间在游戏上，很公平，很牛b的游戏，充了钱也只能买时装，反正一直玩到游戏倒闭！'
    }, {
        imgSrc: img3,
        title: '们.好呢',
        goodNum: '953',
        itemCon: '之前玩过的游戏也不少，但是能让我坚持下来的，黎明之光还是第一个，各种优点都不用说了，最喜欢的还是公平绿色这一点。捏脸系统什么时候实现？满满的期待呢'
    }, {
        imgSrc: img4,
        title: '吉尼亚灰狼_',
        goodNum: '163',
        itemCon: '玩了这么久，确实带给我很多黎明，打击感强烈，动作炫酷、美艳，玩法也非常丰富，感谢黎明陪伴我那么多个日日夜夜，不写了刷怪的时间到了。'
    }, {
        imgSrc: img5,
        title: 'dd＄a519',
        goodNum: '323',
        itemCon: '一开始看到那酷炫的翅膀，就被黎明深深地吸引住了。华丽的画面，酷炫的特效，根本停不下来啊有木有！除了黎明就问还有谁！！！'
    }
];


const Comment = () => {
    return <ul className="comment">
        {
            data.map(function (item) {
                return <Item key={item.imgSrc} {...item}/>
            })
        }
    </ul>
};

export default Comment;