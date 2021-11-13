import React, { useState,useRef,useEffect } from 'react'
import './style.css'
import Background from '../../img/Equippepments/background.png'
import Template from '../helpers/template/index' 
import BlkGreenBtnBkg from '../../img/allegiance/allegiance_btn.png' 
import ThemeBtnBkg from '../../img/shap/themeBtnBackg.svg' 
import BlkBtnSrBackg from '../../img/shap/blockBtnSredBackg.svg'
import CardImg from '../../img/cardImg.png'
import FancyButton from '../helpers/buttons/fancyBtn'
import NormalButton from '../helpers/buttons/normalBtn'

function Equippepments(){

    const [ selected,setSelected ]          = useState('Name');
    const [ Tabselected,setTabSelected ]    = useState('TOOLS');
    const select_options           = useRef(null);
    const taBtn                    = useRef(null);
    // Selections
    function Selections() {
        let selectionOptions = select_options.current.querySelectorAll('li')
        selectionOptions.forEach(li => {
            li.addEventListener('click', (e) => {
                setSelected(e.target.textContent)
            })
        });
    }
    // Tab buttons
    function TheTab() {
        let allBtns = taBtn.current.querySelectorAll('button');
        allBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                setTabSelected(btn.textContent)
            })
        });
    }

    useEffect(() => {
        Selections();
        TheTab();
    },[])




    return(
        <Template backg={Background}>
            <div className="avater-screen mt-5 mb-5">
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-12">
                            <div className="btns" ref={taBtn}> 
                                <FancyButton className={Tabselected === "LAND" ? "active" : ""} backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="LAND"/> 
                                <FancyButton className={Tabselected === "AVATORS" ? "active" : ""} backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="AVATORS"/> 
                                <FancyButton className={Tabselected === "TOOLS" ? "active" : ""} backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="TOOLS"/> 
                                <FancyButton className={Tabselected === "WEAPONS" ? "active" : ""} backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="WEAPONS"/>  
                                <FancyButton className={Tabselected === "VEHICLES" ? "active" : ""} backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="VEHICLES"/>  
                                <FancyButton className={Tabselected === "PETS" ? "active" : ""} backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="PETS"/>
                            </div>
                            <div className="filtering">
                                <div className="selectBOx">
                                    Sort By: 
                                    <div className="selectWrp"> 
                                        <button type="button">{selected}</button>
                                        <ul ref={select_options}>
                                            <li>Rarity</li>
                                            <li>Shine</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {Tabselected === "LAND" ? 
                            <>
                            <div className="col-lg-4">
                                <div className="EquippedCart">
                                    <img src={CardImg} alt="" />
                                    <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/>  
                                </div>
                            </div> 
                            <div className="col-lg-4">
                                <div className="EquippedCart">
                                    <img src={CardImg} alt="" />
                                    <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/>  
                                </div>
                            </div> 
                            </> 
                        : ""}      
                        
                        {Tabselected === "AVATORS" ? 
                            <>
                            <div className="col-lg-4">
                                <div className="EquippedCart">
                                    <img src={CardImg} alt="" />
                                    <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/>  
                                </div>
                            </div> 
                            </>
                         : ""}
                        {Tabselected === "TOOLS" ? 
                            <>
                            <div className="col-lg-4">
                                <div className="EquippedCart">
                                    <img src={CardImg} alt="" />
                                    <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/>  
                                </div>
                            </div> 
                            </>
                         : ""}
                        {Tabselected === "WEAPONS" ? 
                            <>
                            <div className="col-lg-4">
                                <div className="EquippedCart">
                                    <img src={CardImg} alt="" />
                                    <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/>  
                                </div>
                            </div> 
                            </>
                         : ""}
                        {Tabselected === "VEHICLES" ? 
                            <>
                            <div className="col-lg-4">
                                <div className="EquippedCart">
                                    <img src={CardImg} alt="" />
                                    <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/>  
                                </div>
                            </div> 
                            </>
                         : ""}
                        {Tabselected === "PETS" ? 
                            <>
                            <div className="col-lg-4">
                                <div className="EquippedCart">
                                    <img src={CardImg} alt="" />
                                    <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/>  
                                </div>
                            </div> 
                            </>
                         : ""}
                        
                    </div>
                </div>
            </div>
        </Template>
    )
} 

export default Equippepments;