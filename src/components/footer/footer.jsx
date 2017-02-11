import React, {Component} from 'react';

import './footer.scss';

import footerImg from '../../public/images/footer-logo.jpg';

const Footer = () => {
    return <footer>
        <span><img src={footerImg}/></span>
        <p>蓝港在线（北京）科技有限公司 京ICP备09017018号-3 文网游备字[2016]M-RPG2263号</p>
        <em>Copyright © 2007-2015 linekong.com, All Rights Reserved</em>
        <p>电话：010-84170099 地址：北京市朝阳区望京北路启明国际大厦8层 </p>
    </footer>
};

export default Footer;