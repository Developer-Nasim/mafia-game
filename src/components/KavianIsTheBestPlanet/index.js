import React from 'react'
import Template from '../helpers/template'
import './style.css' 
import SectionTitle from '../helpers/sectionTitle/index' 
import Background from '../../img/background.png' 
import ThemeBtnBkg from '../../img/shap/themeBtnBackg.svg' 
import BlkBtnSrBackg from '../../img/shap/blockBtnSredBackg.svg' 
import FullBlockShap from '../../img/kavian/fullBlockShap.png'
import CardContentImg from '../../img/kavian/cardPics.png'
import FancyButton from '../helpers/buttons/fancyBtn'
import CardBox from '..//helpers/card';
 
 
function KevianIsTheBestPlanet() {
    return (
        <Template backg={Background}>
            <div className="kevian-area mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionTitle title="Kavian is One of the Best Planets" class/>
                        </div>
                        <div className="col-lg-7">
                            <div className="kevian-wrp">
                                <div className="kevian-content" style={{ backgroundImage: "url("+FullBlockShap+")" }}>
                                    <p>We have found an interesting piece of land for you to collect coordinates - <span> 38:10</span></p> <br />
                                    <p>Owner profit share from collecting: <span>20%</span></p>
                                    <p>Land Owned By: <span>open.worlds</span></p>
                                </div>
                                <FancyButton className="" title="Sounds Good"/> 
                            </div>
                        </div>
                        <div className="col-lg-4 offer-lg-1">
                            <div className="cartBlk">
                                <CardBox title="" top_button="Rocky Desert" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContentImg} contents={
                                <> <h4>Kavian</h4> 
                                    <p>Charge Time x 2.0 Multiplier</p>
                                </>} /> 
                                <FancyButton className="" title="I want to choose where I collect"/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}


export default KevianIsTheBestPlanet;