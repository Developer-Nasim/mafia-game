import React, { useState,useRef,useEffect } from 'react'
import './style.css'
import Background from '../../img/background.png'
import CardContent from '../../img/bag/shap.png' 
import Template from '../helpers/template/index'  
import ThemeBtnBkg from '../../img/shap/themeBtnBackg.svg' 
import BlkBtnSrBackg from '../../img/shap/blockBtnSredBackg.svg'
import CardBox from '../helpers/card'; 
import TheSlider from "../helpers/slider/index";
import FancyButton from '../helpers/buttons/fancyBtn' 

function Weapons(){
 
    const [ Tabselected,setTabSelected ]    = useState('WEAPONS'); 
    const taBtn                    = useRef(null);
 
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
                                <FancyButton className={Tabselected === "WEAPONS" ? "active" : ""}  title="WEAPONS"/>  
                                <FancyButton className={Tabselected === "VEHICLES" ? "active" : ""} title="VEHICLES"/>  
                                <FancyButton className={Tabselected === "PETS" ? "active" : ""} title="PETS"/>
                            </div> 
                        </div> 
                    </div>
                </div>
                <div className="all-weaponse">
                    <br /> 
                    {Tabselected === "LAND" ? 
                        <>  
                            <TheSlider dots={false} loop={false} speed={500} arrows={false} slideShow={5} SlideScroll={2}> 
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                            </TheSlider> 
                        </>
                    : ""}      
                    
                    {Tabselected === "AVATORS" ? 
                        <>  
                            <TheSlider dots={false} loop={false} speed={500} arrows={false} slideShow={5} SlideScroll={2}> 
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                            </TheSlider> 
                        </>
                        : ""}
                    {Tabselected === "TOOLS" ? 
                        <>  
                            <TheSlider dots={false} loop={false} speed={500} arrows={false} slideShow={5} SlideScroll={2}> 
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                            </TheSlider> 
                        </>
                        : ""}
                    {Tabselected === "WEAPONS" ? 
                        <>  
                            <TheSlider dots={false} loop={false} speed={500} arrows={false} slideShow={5} SlideScroll={2}> 
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                            </TheSlider> 
                        </>
                        : ""}
                    {Tabselected === "VEHICLES" ? 
                        <>  
                            <TheSlider dots={false} loop={false} speed={500} arrows={false} slideShow={5} SlideScroll={2}> 
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                            </TheSlider> 
                        </>
                        : ""}
                    {Tabselected === "PETS" ? 
                        <>  
                            <TheSlider dots={false} loop={false} speed={500} arrows={false} slideShow={5} SlideScroll={2}> 
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                                <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                    <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                </div>} />  
                            </TheSlider> 
                        </>
                        : ""} 
                </div>
            </div>
        </Template>
    )
} 

export default Weapons;