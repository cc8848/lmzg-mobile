import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/footer/footer';
import HeaderNew from './components/headerNew/header';
import PcTips from './components/pcTips/pcTips';
import WxTips from './components/wxTips/WxTips';

import './public/public.scss';
import {ajaxGet, mountDidFn, proxyUrl, httpToHttps} from './public/public';

import bannerNew from './public/images/land/banner-new2.jpg';
import codeSrc from './public/images/land/qrcode06.png';

class App extends Component {
    componentDidMount() {
        mountDidFn();
    }

    render() {
        return (
            <div className="land-main">
                <HeaderNew {...this.props}/>
                <div className="banner-new"><img src={bannerNew} /></div>
                <Footer />
                <PcTips codeSrc={codeSrc}/>
                <WxTips />
            </div>
        )
    };
}

httpToHttps();

var status = {
    httpUrl: proxyUrl,
    androidUrl: '',
    appleUrl: ''
};
$('<div id="land"></div>').appendTo($('body'));


ajaxGet(status.httpUrl + '/api_main', function (data) {
    status = {
        androidUrl: data[3].url,
        appleUrl: data[1].url
    };

    ReactDOM.render(<App {...status}/>, document.getElementById('land'));
});