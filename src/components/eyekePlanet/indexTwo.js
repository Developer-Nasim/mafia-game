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
import NormalButton from '../helpers/buttons/normalBtn'
import BlkGreenBtnBkg from '../../img/allegiance/allegiance_btn.png' 
import InpBackg from '../../img/eyeke/inpBackg.png' 
import FancyButton from '../helpers/buttons/fancyBtn' 

function EyekePlanet_two(){
    
    return(
        <Template backg={Background}>
            <div className="eyeke-screen mt-5 mb-5">
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-12">
                            <div className="btns"> 
                                <FancyButton className="" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="STAKE"/> 
                                <FancyButton className="" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="ALLEGIANCE CORE"/> 
                                <FancyButton className="" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="UNSTAKE"/>  
                            </div>
                            <SectionTitle title="You have 0.0000 staked to eyeke " class/> 
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
                        <div className="col-lg-6 offset-lg-1">
                            <div className="eyeke-wrp-two">
                                <p><small>Planet Treasury: <span>5403320.4658 BIG</span></small></p>
                                <p>STAKE TO EYEKE</p>
                                <p><small className="text-red">Unstaking from planet takes 48 hours </small></p>
                                <div className="amount">
                                    <div className="amount-left">
                                        AMOUNT
                                    </div>
                                    <div className="amount-right">
                                        <form>
                                            <div className="fblk">
                                                <input type="text" placeholder="Enter Amount" style={{ backgroundImage: "url("+InpBackg+")" }}/>
                                                <NormalButton className="s_green" background={BlkGreenBtnBkg} title="BIG"/>  
                                            </div>
                                            <div className="btns"> 
                                                <NormalButton className="s_green" background={BlkGreenBtnBkg} title="20%"/>  
                                                <NormalButton className="s_green" background={BlkGreenBtnBkg} title="50%"/>  
                                                <NormalButton className="s_green" background={BlkGreenBtnBkg} title="75%"/>  
                                                <NormalButton className="s_green" background={BlkGreenBtnBkg} title="100%"/>  
                                            </div>
                                            <FancyButton className="" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="Confirm"/>  
                                            <p>NFTMOD: <span>110099478</span></p>
                                        </form>
                                    </div>
                                </div> 
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
        </Template>
    )
} 

export default EyekePlanet_two;