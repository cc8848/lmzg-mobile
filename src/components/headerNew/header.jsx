import React, {Component} from 'react';

import './header.scss';

import logoImgNew from '../../public/images/land/land-logo-new.png';

const Header = (props) => {
    return <header>
        <div className="logo">
            <a><img src={logoImgNew}/></a>
            <div className="game-title">
                <h1>黎明之光</h1>
                <div className="star-red">
                    <span>蓝港首款</span>
                </div>
                <h2>3D魔幻RPG手游</h2>
            </div>
        </div>
        <a className="game-download game-download-href game-download-new" id="gameDownload"
           data-android={props.androidUrl} data-apple={props.appleUrl}> </a>
    </header>
};

export default Header;