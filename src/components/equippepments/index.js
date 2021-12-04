import React, { useState,useRef,useEffect } from 'react'
import './style.css'
import Background from '../../img/Equippepments/background.png'
import CardContent from '../../img/Equippepments/for_card.png'
import Template from '../helpers/template/index' 
import BlkGreenBtnBkg from '../../img/allegiance/allegiance_btn.png' 
import ThemeBtnBkg from '../../img/shap/themeBtnBackg.svg' 
import BlkBtnSrBackg from '../../img/shap/blockBtnSredBackg.svg'
import CardBox from '../helpers/card'; 
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
                                <FancyButton className={Tabselected === "LAND" ? "active" : ""} title="LAND"/> 
                                <FancyButton className={Tabselected === "AVATORS" ? "active" : ""} title="AVATORS"/> 
                                <FancyButton className={Tabselected === "TOOLS" ? "active" : ""} title="TOOLS"/> 
                                <FancyButton className={Tabselected === "WEAPONS" ? "active" : ""} title="WEAPONS"/>  
                                <FancyButton className={Tabselected === "VEHICLES" ? "active" : ""} title="VEHICLES"/>  
                                <FancyButton className={Tabselected === "PETS" ? "active" : ""} title="PETS"/>
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
                            <div className="col-lg-3">
                                <div className="EquippedCart">
                                    <CardBox title="" top_button="Tool 1" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                    <> <h4>Standard shovel</h4>
                                        <button>Extractor</button>
                                        <p>Charge Time: 80 secs</p>
                                    </>} /> 
                                    <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/>  
                                </div>
                            </div> 
                            <div className="col-lg-3">
                                <div className="EquippedCart">
                                    <CardBox title="" top_button="Tool 2" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                    <> <h4>Standard shovel</h4>
                                        <button>Extractor</button>
                                        <p>Charge Time: 80 secs</p>
                                    </>} /> 
                                    <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/>  
                                </div>
                            </div> 
                            </> 
                        : ""}      
                        
                        {Tabselected === "AVATORS" ? 
                            <>
                            <div className="col-lg-3">
                                <div className="EquippedCart">
                                    <CardBox title="" top_button="Tool 3" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                    <> <h4>Standard shovel</h4>
                                        <button>Extractor</button>
                                        <p>Charge Time: 80 secs</p>
                                    </>} /> 
                                    <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/>  
                                </div>
                            </div> 
                            </>
                         : ""}
                        {Tabselected === "TOOLS" ? 
                            <>
                            <div className="col-lg-3">
                                <div className="EquippedCart">
                                    <CardBox title="" top_button="Tool 4" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                    <> <h4>Standard shovel</h4>
                                        <button>Extractor</button>
                                        <p>Charge Time: 80 secs</p>
                                    </>} /> 
                                    <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/>  
                                </div>
                            </div> 
                            </>
                         : ""}
                        {Tabselected === "WEAPONS" ? 
                            <>
                            <div className="col-lg-3">
                                <div className="EquippedCart">
                                    <CardBox title="" top_button="Tool 5" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                    <> <h4>Standard shovel</h4>
                                        <button>Extractor</button>
                                        <p>Charge Time: 80 secs</p>
                                    </>} /> 
                                    <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/>  
                                </div>
                            </div> 
                            </>
                         : ""}
                        {Tabselected === "VEHICLES" ? 
                            <>
                            <div className="col-lg-3">
                                <div className="EquippedCart">
                                    <CardBox title="" top_button="Tool 6" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                    <> <h4>Standard shovel</h4>
                                        <button>Extractor</button>
                                        <p>Charge Time: 80 secs</p>
                                    </>} /> 
                                    <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/>  
                                </div>
                            </div> 
                            </>
                         : ""}
                        {Tabselected === "PETS" ? 
                            <>
                            <div className="col-lg-3">
                                <div className="EquippedCart">
                                    <CardBox title="" top_button="Tool 7" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                    <> <h4>Standard shovel</h4>
                                        <button>Extractor</button>
                                        <p>Charge Time: 80 secs</p>
                                    </>} /> 
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