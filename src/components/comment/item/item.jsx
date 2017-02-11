import React, {Component} from 'react';

import './item.scss';

export default class ImgShow extends Component {
    render() {
        return <li className="item-li clearfix">
            <span className="avatar"><img src={this.props.imgSrc}/></span>
            <div className="item-con-wrap">
                <div className="item-con-title clearfix">
                    <h3>{this.props.title}</h3>
                    <div className="item-con-star">
                        <a className="star-yellow"></a>
                        <a className="star-yellow"></a>
                        <a className="star-yellow"></a>
                        <a className="star-yellow"></a>
                        <a className="star-yellow"></a>
                    </div>
                    <span className="comment-num">{this.props.goodNum}</span>
                </div>
                <p>{this.props.itemCon}</p>
            </div>
        </li>
    }
}