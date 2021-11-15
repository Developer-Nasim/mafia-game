import React from 'react'
import Template from '../helpers/template'
import './style.css' 
import MsgBackground from '../../img/allegiance/alle_backg.png'
import BlkGreenBtnBkg from '../../img/allegiance/allegiance_btn.png' 
import CardContent from '../../img/bag/shap.png' 
import CardBox from '../helpers/card';  
import NormalButton from '../helpers/buttons/normalBtn'
import PopUpBlock from '../helpers/popupBlock'

  
function StandardShovel() {
    return (
        <Template backg={MsgBackground}>
            <div className="StandardShovel-area mt-5 mb-5">
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-8 offset-lg-2">
                            <PopUpBlock background="" heading="Standard Shovel">
                                <div className="standard-shovel"> 
                                    <div className="ssBlk">
                                        <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                        <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                            <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                        </div>} />  
                                        <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/>  
                                    </div>
                                    <div className="ssBlkWrp">
                                        <ul>
                                            <li><span>Rarity</span> <span>Abundant</span></li>
                                            <li><span>Shine</span> <span>Stone</span></li>
                                            <li><span>Type</span> <span>Extractor</span></li>
                                            <li><span>Charge Time</span> <span>80</span></li>
                                            <li><span>Proof of Work Reduction</span> <span>0</span></li>
                                            <li><span>Trilium Collecting Power</span> <span>1</span></li>
                                            <li><span>NFT Luck</span> <span>0.5</span></li> 
                                        </ul>
                                    </div>
                                </div>
                            </PopUpBlock> 
                        </div>  
                    </div>
                </div>
            </div>
        </Template>
    )
}


export default  StandardShovel;