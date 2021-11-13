import React from 'react'
import Template from '../helpers/template'
import './style.css' 
import SectionTitle from '../helpers/sectionTitle/index' 
import Background from '../../img/background.png' 
import ThemeBtnBkg from '../../img/shap/themeBtnBackg.svg' 
import BlkBtnSrBackg from '../../img/shap/blockBtnSredBackg.svg'
import CardImg from '../../img/cardImg.png'
import FullBlockShap from '../../img/kavian/fullBlockShap.png'
import FancyButton from '../helpers/buttons/fancyBtn'
 
 
function KevianIsTheBestPlanet() {
    return (
        <Template backg={Background}>
            <div className="allegiance-area">
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
                                <FancyButton className="" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="Sounds Good"/> 
                            </div>
                        </div>
                        <div className="col-lg-4 offer-lg-1">
                            <div className="cartBlk">
                                <img src={CardImg} alt="" />
                                <FancyButton className="" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="I want to choose where I collect"/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}


export default KevianIsTheBestPlanet;