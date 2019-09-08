import React, { Component } from "react"
// import "../../Style/cafaeble.recomendation-1.0.css"
import { browserHistory } from "react-router"
import Backgroundlist1 from "../../Asset/img/cafe/eatboss-dago/main.jpg"
import Backgroundlist2 from "../../Asset/img/cafe/upnormal-riau/main.jpg"
import Backgroundlist3 from "../../Asset/img/cafe/kopi372-dago/main.jpg"
import MostRatedCafe1 from "../../Asset/img/cafe/eatboss-dago/main.jpg"
import MostRatedCafe2 from "../../Asset/img/cafe/upnormal-riau/main.jpg"
import MostRatedCafe3 from "../../Asset/img/cafe/kopi372-dago/main.jpg"
import EatbossGal1 from "../../Asset/img/cafe/eatboss-dago/gal-1.jpg"
import EatbossGal2 from "../../Asset/img/cafe/eatboss-dago/gal-2.jpg"
import EatbossGal3 from "../../Asset/img/cafe/eatboss-dago/gal-3.jpg"
import EatbossGal4 from "../../Asset/img/cafe/eatboss-dago/gal-4.jpg"
import Provider1 from "../../Asset/img/provider/google.png"
import Provider2 from "../../Asset/img/provider/tripadvisor.png"
import Provider3 from "../../Asset/img/provider/zomato.png"

class Recomendation extends Component {
    onNavigateHomepage() {
        browserHistory.push("/Homepage");
    }
    
    render() {
        return (
            <div>
                <div className="pop-up pop-rate" style="display: none">
                    <a href="#" className="close-but"><i class="fa fa-time-circle"></i></a>
                    <div className="cafe-detail" img={Backgroundlist1}>
                        <img src="{Backgroundlist1}" />
                        <ul>
                            <li>Eatboss Dago</li>
                            <li>Jl. Ir. H. Djuanda No. 72, Dago, Bandung</li>
                            <li>Dago &bull; Casual Dining &bull; Relax</li>
                        </ul>
                    </div>
                    <div class="amount">0</div>
                    <div class="slider-rate"></div>
                    <ul class="guide">
                        <li>0</li>
                        <li>2.5</li>
                        <li>5</li>
                    </ul>
                    <div class="button">
                        <button>Save <i class="fa fa-save"></i></button>
                    </div>
                </div>

                <div class="pop-up pop-edit" style="display: none;">
                    <a href="#" class="close-but"><i class="fa fa-time-circle"></i></a>
                    <div class="cafe-detail" img={Backgroundlist1}>
                        <img src="{Backgroundlist1}" />
                        <ul>
                            <li>Eatboss Dago</li>
                            <li>Jl. Ir. H. Djuanda No. 72, Dago, Bandung</li>
                            <li>Dago &bull; Casual Dining &bull; Relax</li>
                        </ul>
                    </div>
            
                    <div class="amount">0</div>
                    <div class="slider-rate"></div>
                    <ul class="guide">
                        <li>0</li>
                        <li>2.5</li>
                        <li>5</li>
                    </ul>
            
                    <button>Delete Score <i class="fa fa-trash-alt"></i></button>
            
                    <div class="button">
                    <button>Save <i class="fa fa-save"></i></button>
                    </div>
                </div>
                <div class="pop-up pop-gall" style="display: none;">
                    <a href="#" class="close-but"><i class="fa fa-time-circle"></i></a>
                    <a href="#" class="gall-nav gall-prev"><i class="fa fa-chevron-left"></i></a>
                    <a href="#" class="gall-nav gall-next"><i class="fa fa-chevron-right"></i></a>
                    <img src="#" />
                </div>

                <div className="overlay" style="display: none"></div>

                <ul class="the-view">
                    <li><a href="#" class="for-map is-on"><i class="fa fa-map-marked-alt"></i></a></li>
                    <li><a href="#" class="for-list"><i class="fa fa-th-list"></i></a></li>
                </ul>

                <section class="side-recom">
                    <div class="tit-sec ">Recomendation</div>
                    <ul class="list-cafe">
                        <li>
                            <a href="#" class="has-score" data-id="1">
                                <div class="val-scored">4.1</div>
                                <i class="fa fa-check"></i>
                                <img src="{Backgroundlist1}" />
                                Eatboss Dago Warunk Upnormal Riau Warunk Upnormal Riau
                                <span>Jl. Ir. H. Djuanda No. 72, Dago, Bandung</span>
                                <ul className="the-meter">
                                    <li><div style="width: 100%;"></div></li>
                                    <li><div style="width: 100%;"></div></li>
                                    <li><div style="width: 100%;"></div></li>
                                    <li><div style="width: 100%;"></div></li>
                                    <li><div style="width: 50%;"></div></li>
                                </ul>
                            </a>
                        </li>
                        <li>
                            <a href="#" data-id="2" img={Backgroundlist2}>
                                <img src="{Backgroundlist2}" />
                                Warunk Upnormal Riau
                                <span>Jl. L.L.R.E Martadinata No. 114, Riau, Bandung</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" data-id="3" img={Backgroundlist3}>
                                <img src="{Backgroundlist3}" />
                                Kopi 372 Setiabudi
                                <span>Jl. Karangsari No.21, Pasteur, Kec. Sukajadi, Kota Bandung, Jawa Barat 40161</span>
                            </a>
                        </li>
                    </ul>
                </section>

                <section class="side-detail has-score" style="display:none">
                    <div className="det-header" style={Backgroundlist1} background-size="cover">
                        <a href="#" class="close-but"><i class="fa fa-time-circle"></i></a>
                        <a href="#" class="pro-pic"><img src="{Backgroundlist1}" /></a>
                        <ul>
                            <li>Eatboss Dago</li>
                            <li>Jl. Ir. H. Djuanda No. 72, Dago, Bandung</li>
                            <li>Dago &bull; Casual Dining &bull; Relax</li>
                        </ul>
                    </div>
                    <ul class="list-gall">
                        <li>
                            <a href="#" img={EatbossGal1}><img src="{EatbossGal1}" /></a>
                        </li>
                        <li>
                            <a href="#" img={EatbossGal2}><img src="{EatbossGal2}" /></a>
                        </li>
                        <li>
                            <a href="#" img={EatbossGal3}><img src="{EatbossGal3}" /></a>
                        </li>
                        <li>
                            <a href="#" img={EatbossGal4}><img src="{EatbossGal4}" /></a>
                        </li>
                        <li>
                            <a href="#" img={EatbossGal1}><img src="assets/img/cafe/eatboss-dago/cover.jpg" /></a>
                        </li>
                    </ul>
                    <div className="thes-score">
                        <div className="tit-seg">Prediction Score</div>
                        <i class="fa fa-start"></i>
                        <div className="scroing"><strong>4.1</strong>/5</div>
                        <ul class="the-meter">
                            <li><div style="width: 100%;"></div></li>
                            <li><div style="width: 100%;"></div></li>
                            <li><div style="width: 100%;"></div></li>
                            <li><div style="width: 100%;"></div></li>
                            <li><div style="width: 10%;"></div></li>
                        </ul>
                        <div className="date-scoring">Scoring on <strong>15 Jun 2019 &bull; 19:18</strong></div>
                        <a href="#">Edit this score <i class="icofont-edit"></i></a>
                    </div>
                    
                    <ul class="list-pro">
                        <li>
                            <a href="#" target="_blank" img={Provider1}>
                                <ul>
                                    <li><img src="{Provider1}" /></li>
                                    <li>
                                        <ul class="the-meter">
                                            <li><div style="width: 100%;"></div></li>
                                            <li><div style="width: 100%;"></div></li>
                                            <li><div style="width: 100%;"></div></li>
                                            <li><div style="width: 100%;"></div></li>
                                            <li><div style="width: 30%;"></div></li>
                                        </ul>
                                        <span><strong>2.663</strong> Reviews</span>
                                    </li>
                                    <li>4,3</li>
                                </ul>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" img={Provider2}>
                                <ul>
                                    <li><img src="{Provider2}"/></li>
                                    <li>
                                        <ul class="the-meter">
                                            <li><div style="width: 100%;"></div></li>
                                            <li><div style="width: 100%;"></div></li>
                                            <li><div style="width: 100%;"></div></li>
                                            <li><div style="width: 100%;"></div></li>
                                            <li><div style="width: 50%;"></div></li>
                                        </ul>
                                        <span><strong>15</strong> Reviews</span>
                                    </li>
                                    <li><span>4,5</span></li>
                                </ul>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" img={Provider3}>
                                <ul>
                                    <li><img src="{Provider3}" /></li>
                                    <li>
                                        <ul class="the-meter">
                                            <li><div style="width: 100%;"></div></li>
                                            <li><div style="width: 100%;"></div></li>
                                            <li><div style="width: 100%;"></div></li>
                                            <li><div style="width: 60%;"></div></li>
                                            <li><div style="width: 0%;"></div></li>
                                        </ul>
                                        <span><strong>91</strong> Reviews</span>
                                    </li>
                                    <li><span>3,6</span></li>
                                </ul>
                            </a>
                        </li>
                    </ul>
                    <ul className="cafe-info">
                        <li>
                            <span>Information</span>
                            <ul>
                                <li><i class="icofont-ui-check"></i> Breakfast</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Recomendation;