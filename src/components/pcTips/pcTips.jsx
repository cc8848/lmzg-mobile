import React, {Component} from 'react';

import './pcTips.scss';

const PcTips = (props) => {
    return <div className="pc-tips">
        <div className="qr-code">
            <span><img src={props.codeSrc}/></span>
            <p>请扫描二维码查看</p>
        </div>
    </div>
};

export default PcTips;