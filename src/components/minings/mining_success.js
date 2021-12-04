import React from 'react'
import Template from '../helpers/template'
import './style.css' 
import MsgBackground from '../../img/messages/msgBackg.png'   
import ProgressBackg from '../../img/minings/progress_backg.svg'
import ProgressBackgBar from '../../img/minings/progress_bar.svg'
import ThemeBtnBkg from '../../img/shap/themeBtnBackg.svg' 
import BlkBtnSrBackg from '../../img/shap/blockBtnSredBackg.svg'
import FancyButton from '../helpers/buttons/fancyBtn'
import PopUpBlock from '../helpers/popupBlock'
 
 
function MiningSuccess() {
    return (
        <Template backg={MsgBackground}>
            <div className="minings-area mt-5 mb-5">
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-8 offset-lg-2">
                            <PopUpBlock background="" heading="Collecting Success"> 
                                <div className="mining_success_progress">
                                    <p>Claim your BIG</p>
                                    <h5>Land Commision :</h5>
                                    <div className="progs_bar">
                                        <img src={ProgressBackg} className="p_backg" alt="" />
                                        <img src={ProgressBackgBar} className="p_bar" alt="" />
                                        <span>8 %</span>
                                    </div>
                                    <FancyButton className="" title="Claim"/> 
                                    <FancyButton className="" title="Change Land"/> 
                                </div> 
                            </PopUpBlock> 
                        </div>  
                    </div>
                </div>
            </div>
        </Template>
    )
}


export default  MiningSuccess;