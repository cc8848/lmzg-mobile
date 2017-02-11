import React, {Component} from 'react';

import './career.scss';

import img0 from '../../public/images/land/land-img-0.jpg';
import img1 from '../../public/images/land/land-img-1.jpg';
import img2 from '../../public/images/land/land-img-2.jpg';
import img3 from '../../public/images/land/land-img-3.jpg';

export default class Career extends Component {
    componentDidMount(){
        new Swiper('#roleTab', {
            pagination: '.swiper-pagination',
            paginationClickable: true
        });
    }
    render() {
        return <div className="swiper-container role-tab" id="roleTab">
            <div className="swiper-pagination"></div>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="role-con">
                        <h3>武器：双剑 | 迅捷灵动的突袭锋刃</h3>
                        <p>
                            怒威龙族天才少年，多年的艰苦训练使他成为同龄族人中实力最强的守望者。他身手矫健，轻松驾驭一对双剑，收割敌人生命如同探囊取物一般。在战场上，他灵动且迅捷，如同利剑快速突进直逼敌方要害。</p>
                    </div>
                    <img src={img3} alt=""/>
                </div>
                <div className="swiper-slide">
                    <div className="role-con">
                        <h3>武器：双枪 | 一枪穿云的冷静杀神</h3>
                        <p>
                            天生的冒险家，崇尚自由，有着过人战斗天赋的她通过不断的冒险锻炼自己，成就了她一身过硬的本领。破坏力巨大的双枪在她的手中往往可以发挥更可怕的威力。精准且致命的远程攻击可以让赏金猎人在万军从中轻取上将首级！</p>
                    </div>
                    <img src={img1} alt=""/>
                </div>
                <div className="swiper-slide">
                    <div className="role-con">
                        <h3>武器：镰刀 | 横扫战场的御世公主</h3>
                        <p>
                            御世龙族长老的女儿，天资聪颖，生性顽劣。个性张扬的傀儡师有着高深的智慧和过人的实力，娇小的身材却能完美驾驭硕大的镰刀，巨镰挥过轻者骨断筋折，重者性命不保。战场之上的傀儡师已经成为了死神的代名词。</p>
                    </div>
                    <img src={img0} alt=""/>
                </div>
                <div className="swiper-slide">
                    <div className="role-con">
                        <h3>武器：魔法宝典 | 魔法元素的掌控者</h3>
                        <p>
                            化身人类加入法师协会的他，完全掌握了元素力量的奥义。冰元素魔法控制敌人与反击，火元素魔法拥有大范围攻击力，雷元素魔法则会瞬间爆发伤害，他甚至还学会了精灵族的治疗本领。优雅的动作让魔导师的战斗总是充满艺术性。</p>

                    </div>
                    <img src={img2} alt=""/>
                </div>
            </div>
        </div>
    }
}