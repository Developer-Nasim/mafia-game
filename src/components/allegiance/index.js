import React from 'react'
import Template from '../helpers/template'
import './style.css' 
import SectionTitle from '../helpers/sectionTitle/index' 
import Background from '../../img/allegiance/alle_backg.png' 
import BlkGreenBtnBkg from '../../img/allegiance/allegiance_btn.png' 
import ThemeBtnBkg from '../../img/shap/themeBtnBackg.svg' 
import BlkBtnSrBackg from '../../img/shap/blockBtnSredBackg.svg'
import Alle from '../../img/allegiance/alle.png'
import Alle2 from '../../img/allegiance/alle2.png' 
import Alle3 from '../../img/allegiance/alle3.png'
import FancyButton from '../helpers/buttons/fancyBtn'
import NormalButton from '../helpers/buttons/normalBtn'
import TheSlider from "../helpers/slider/index";
 
 
function Allegiance() {
    return (
        <Template backg={Background}>
            <div className="allegiance-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionTitle title="Allegiance Core" class/>
                        </div>
                        <div className="col-lg-12">
                            <div className="allegiances-carousel">
                                <TheSlider dots={false} loop={false} arrows={true} speed={500} slideShow={3} SlideScroll={2}> 
                                    <div className="carousel_item">
                                        <img src={Alle} alt="" />
                                        <FancyButton className="" title="Eyeke"/> 
                                    </div>
                                    <div className="carousel_item">
                                        <img src={Alle2} alt="" />
                                        <FancyButton className="" title="Kavian"/> 
                                    </div>
                                    <div className="carousel_item">
                                        <img src={Alle3} alt="" />
                                        <FancyButton className="" title="Magor"/> 
                                    </div>
                                    <div className="carousel_item">
                                        <img src={Alle2} alt="" />
                                        <FancyButton className="" title="Kavian"/> 
                                    </div>
                                    <div className="carousel_item">
                                        <img src={Alle3} alt="" />
                                        <FancyButton className="" title="Magor"/> 
                                    </div>
                                </TheSlider>
                            </div>
                            <div className="bottomBtns">
                                <NormalButton className="s_green small" background={BlkGreenBtnBkg} title="Staking BIG"/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}


export default  Allegiance;