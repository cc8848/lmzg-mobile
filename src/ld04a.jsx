import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SplitLine from './components/splitLine/splitLine';
import Banner from './components/banner/banner';
import Download from './components/download/download';
import Career from './components/career/career';
import Comment from './components/Comment/Comment';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import PcTips from './components/pcTips/pcTips';
import WxTips from './components/wxTips/WxTips';
import LoadMore from './components/loadMore/loadMore';

import './public/public.scss';
import {ajaxGet, mountDidFn, proxyUrl, httpToHttps} from './public/public';

import splitLineImg0 from './public/images/land/land-title0.png';
import splitLineImg1 from './public/images/land/land-title1.png';
import gifSrc0 from './public/images/land/career0.gif';
import codeSrc0 from './public/images/land/04a.png';

class App extends Component {
    componentDidMount() {
        mountDidFn();
    }

    render() {
        return (
            <div className="land-main">
                <Header {...this.props}/>
                <Banner />
                <Download gifSrc={gifSrc0} {...this.props}/>
                <SplitLine src={splitLineImg0}/>
                <Career />
                <SplitLine src={splitLineImg1}/>
                <Comment />
                <LoadMore {...this.props}/>
                <Footer />
                <PcTips codeSrc={codeSrc0}/>
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