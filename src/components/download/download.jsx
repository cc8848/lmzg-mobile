import React, {Component} from 'react';

import './download.scss';

import appleDownload from '../../public/images/land/land-download-apple.png';
import androidDownload from '../../public/images/land/land-download-anroid.png';

const Download = (props) => {
    return <div className="download">
        <div className="video">
            <img src={props.gifSrc}/>
        </div>
        <div className="download-btn">
            <a className="apple-btn" id="appleDownload" href={props.appleUrl}>
                <img src={appleDownload}/>
            </a>
            <a className="android-btn" id="androidDownload" href={props.androidUrl}>
                <img src={androidDownload}/>
            </a>
        </div>
    </div>
};

export default Download;