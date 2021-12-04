import React from 'react'
import Template from '../helpers/template'
import './style.css' 
import MsgBackground from '../../img/messages/msgBackg.png' 
import BlkGreenBtnBkg from '../../img/shap/blockBtnGreenBackg.svg'
import ThemeBtnBkg from '../../img/shap/themeBtnBackg.svg' 
import BlkBtnSrBackg from '../../img/shap/blockBtnSredBackg.svg' 
import NormalButton from '../helpers/buttons/normalBtn'
import FancyButton from '../helpers/buttons/fancyBtn' 
import CardBox from '../helpers/card';  
import CardContent from '../../img/bag/shap.png' 
import AddBlkBackground from '../../img/minings/addMinings.png'  
import AddShap from '../../img/minings/add.png'  
  
function MiningHub() {
    return (
        <Template backg={MsgBackground}>
            <div className="minighub-area mt-5 mb-5">
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-12">
                            <div className="collectingHubTopBtn">
                                <FancyButton className="" title="COLLECTING HUB"/> 
                            </div>
                            <div className="allMiningBlk">
                                <div className="singleMnBlk"> 
                                    <CardBox title="" top_button="Tool 1" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                    <> <h4>Standard shovel</h4>
                                        <button>Extractor</button>
                                        <p>Charge Time: 80 secs</p>
                                    </>} /> 
                                    <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/> 
                                </div>
                                <div className="singleMnBlk"> 
                                    <CardBox title="" top_button="Tool 1" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                    <> <h4>Standard shovel</h4>
                                        <button>Extractor</button>
                                        <p>Charge Time: 80 secs</p>
                                    </>} /> 
                                    <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Equipped"/> 
                                </div>
                                <div className="singleMnBlk"> 
                                    <div className="addBlk">
                                        <img src={AddBlkBackground} className="background notSelect" alt="" />
                                        <button type="button"><img src={AddShap} className="notSelect" alt="" /></button>
                                    </div>
                                </div>
                                <div className="singleMnBlk"> 
                                    <div className="addBlk">
                                        <img src={AddBlkBackground} className="background notSelect" alt="" />
                                        <button type="button"><img src={AddShap} className="notSelect" alt="" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="collectingHubBottom">
                                <FancyButton className="" title="COLLECT"/> 
                                <p>Land Commision 8%</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </Template>
    )
}


export default MiningHub;