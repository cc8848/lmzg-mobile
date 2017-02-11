import React, {Component} from 'react';

import './imgShow.scss';

import img0 from '../../public/images/land/land-img.jpg';
import img2 from '../../public/images/land/land-img2.jpg';
import img3 from '../../public/images/land/land-img3.jpg';
import img4 from '../../public/images/land/land-img4.jpg';


export default class ImgShow extends Component {
    componentDidMount() {
        new Swiper('#imgTab', {
            pagination: '.swiper-pagination',
            paginationClickable: true
        });
    }

    render() {
        return <div className="swiper-container img-tab" id="imgTab">
            <div className="swiper-pagination"></div>
            <div className="swiper-wrapper">
                <div className="swiper-slide"><img src={img0} alt=""/></div>
                <div className="swiper-slide"><img src={img4} alt=""/></div>
                <div className="swiper-slide"><img src={img3} alt=""/></div>
                <div className="swiper-slide"><img src={img2} alt=""/></div>
            </div>
        </div>
    }
}