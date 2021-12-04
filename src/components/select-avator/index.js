import React from 'react'
import Template from '../helpers/template'
import './style.css' 
import MsgBackground from '../../img/allegiance/alle_backg.png'
import BlkGreenBtnBkg from '../../img/allegiance/allegiance_btn.png' 
import CardContent from '../../img/bag/shap.png' 
import CardBox from '../helpers/card';  
import NormalButton from '../helpers/buttons/normalBtn'
import PopUpBlock from '../helpers/popupBlock'
import ThemeBtnBkg from '../../img/shap/themeBtnBackg.svg' 
import BlkBtnSrBackg from '../../img/shap/blockBtnSredBackg.svg'
import FancyButton from '../helpers/buttons/fancyBtn'


function SelectAvator() {
    return (
        <Template backg={MsgBackground}>
            <div className="selectAvator-area mt-5 mb-5">
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12">
                            <div className="selectAvatorTop">
                                <p><span>h.axa.wam</span> Select Your Default Avator</p>
                                <label>
                                    Name: <input type="text" placeholder="Minimum 4 char, only alphabets & numbers" />
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="avators-wrp left">
                                <p>Supported Devices</p>
                                <p><span>PC (Chrome Browser)</span></p>
                                <p><span>MAC (Chrome Browser)</span></p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="avaters">
                                <CardBox title="" top_button="Tool 1" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <> <h4>Standard shovel</h4>
                                    <button>Extractor</button>
                                    <p>Charge Time: 80 secs</p>
                                </>} /> 
                                <CardBox title="" top_button="Tool 1" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                <> <h4>Standard shovel</h4>
                                    <button>Extractor</button>
                                    <p>Charge Time: 80 secs</p>
                                </>} /> 
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="avators-wrp right">
                                <p>Alien Worlds Support</p>
                                <p><span>Telegram</span></p>
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <div className="avaterTos"> 
                                <div className="tos">
                                    <label className="ckb">
                                        Check here to indicate that you have read and agree to <a href="#">the Terms & Conditions.</a>
                                        <input type="checkbox"/>
                                        <span className="checkmark"></span>
                                    </label> 
                                    <label className="ckb">Check here to confirm you are 18 years of age or older
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <FancyButton className="" title="I'm Ready"/> 
                            </div> 
                        </div>
                    </div>  
                </div>
            </div>
        </Template>
    )
}
 
export default  SelectAvator;