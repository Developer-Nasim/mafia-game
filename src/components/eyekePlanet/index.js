import React, { useState,useRef,useEffect } from 'react'
import './style.css'
import Background from '../../img/eyeke/background.png'
import SectionTitle from '../helpers/sectionTitle/index' 
import Template from '../helpers/template/index'  
import ThemeBtnBkg from '../../img/shap/themeBtnBackg.svg' 
import BlkBtnSrBackg from '../../img/shap/blockBtnSredBackg.svg'
import ClaimingBlk from '../../img/claiming_blk.png'
import Shap from '../../img/shap/shap.svg'
import CardImg from '../../img/cardImg.png'
import EyekeImg from '../../img/allegiance/alle3.png'
import ArrowIcons from '../../img/icons/arrow.svg' 
import FancyButton from '../helpers/buttons/fancyBtn' 

function EyekePlanet(){
  


    return(
        <Template backg={Background}>
            <div className="eyeke-screen mb-5">
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-12">
                            <SectionTitle title="Hi Bear - The Federation Is Glad You Are Here " class/> 
                        </div>
                        <div className="col-lg-5">
                            <div className="eyekeExampleBlk">
                                <div className="claiming-blk">
                                    <img src={ClaimingBlk} className="claiming-bg notSelect" alt="" />
                                    <div className="clm-titles">
                                        <h5>EYEKE</h5>
                                        <img src={Shap} className="notSelect" alt="" />
                                    </div>
                                    <img src={EyekeImg} className="content_img" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="eyeke-wrp">
                                <ul className="pointings">
                                    <li><img src={ArrowIcons} alt="" /> <div>After a long journey you have arrived in <span>Federation Space.</span></div> </li>
                                    <li><img src={ArrowIcons} alt="" /> <div>We have found a planet for you to collect.</div> </li>
                                </ul>
                                <ul className="moreInfo">
                                    <li>Current Collecting Pot:  <span>0.2654 BIG</span></li>
                                    <li>Current Collecting Pot:  <span>0.9287789</span></li>
                                    <li><span>This is a great planet</span></li>
                                </ul> 
                                <FancyButton className="" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="Let's Start"/>  
                                <FancyButton className="" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="Choose a Different Planet"/>  
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
        </Template>
    )
} 

export default EyekePlanet;