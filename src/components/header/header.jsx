import React, {Component} from 'react';

import './header.scss';

import logoImg from '../../public/images/land/land-logo.png';

const Header = (props) => {
    return <header>
        <div className="logo">
            <a><img src={logoImg}/></a>
            <div className="game-title">
                <h1>黎明之光</h1>
                <div className="star-red">
                    <a className="star"></a>
                    <a className="star"></a>
                    <a className="star"></a>
                    <a className="star"></a>
                    <span>(9876)</span>
                </div>
                <h2>113M  3695万次下载</h2>
            </div>
        </div>
        <a className="game-download game-download-href" id="gameDownload"
           data-android={props.androidUrl} data-apple={props.appleUrl}>游戏下载</a>
    </header>
};

export default Header;