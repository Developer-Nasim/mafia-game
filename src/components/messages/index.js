import React from 'react'
import Template from '../helpers/template'
import './style.css'
import SectionTitle from '../helpers/sectionTitle/index' 
import Shap from '../../img/shap/shap.svg'
import ExpShap from '../../img/shap/expension-title-shap.svg'
import BtmShap from '../../img/shap/bottom-shap.svg'
import ClaimingBlk from '../../img/claiming_blk.png'
import Hill from '../../img/hill.png'
import Background from '../../img/background.png'
import MsgBackground from '../../img/messages/msgBackg.png'
import Hill2 from '../../img/hill2.png'
import Hill3 from '../../img/hill3.png'
import BlkBtnBkg from '../../img/shap/blockBtnBackg.svg'
import BlkGreenBtnBkg from '../../img/shap/blockBtnGreenBackg.svg'
import BlkSoftRedBtnBkg from '../../img/shap/blockBtnSoft_redBackg.svg'
import BlkRedBtnBkg from '../../img/shap/blockBtnRedBackg.svg'
import ThemeBtnBkg from '../../img/shap/themeBtnBackg.svg'
import SoftRedTitle from '../../img/shap/soft_red.svg'
import RedTitle from '../../img/shap/red.svg' 
import DinmondIcon from '../../img/icons/dimond.svg'
import LockIcon from '../../img/icons/lock.svg'
import StarIcon from '../../img/icons/star.svg'
import NormalButton from '../helpers/buttons/normalBtn'
import PopUpBlock from '../helpers/popupBlock'



const MsgBlk = (props) => {
    return(
        <div className="msgBlk">
            <div className="icon">
                <img src={props.icon} alt="" />
            </div>
            <div className="msgContents">
                <h5>{props.title}</h5>
                <p>{props.content}</p>
            </div>
            <NormalButton className={props.button_disabled ? "green disabled" : "green"} background={BlkGreenBtnBkg} title={props.button_content} /> 
        </div>
    )
}

 
function Messages() {
    return (
        <Template backg={MsgBackground}>
            <div className="messages-area mt-5 mb-5">
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-8 offset-lg-2">
                            <PopUpBlock background="" heading="Messages">
                                <button className="fixedLeftBtnForBlk" type="button">Clear All</button>
                                <div className="messages_list">
                                    <MsgBlk icon={DinmondIcon} title="Anniversary Event" content="Collect lots of gifts! Good Luck!" button_content="Accept"/> 
                                    <MsgBlk icon={LockIcon} title="Security Issue!" content="Collect lots of gifts! Good Luck!" button_content="Send"/> 
                                    <MsgBlk icon={StarIcon} title="Collect Weekend Gift" content="Collect lots of gifts! Good Luck!" button_disabled button_content="Accepted"/>  
                                    <MsgBlk icon={DinmondIcon} title="Anniversary Event" content="Collect lots of gifts! Good Luck!" button_content="Accept"/> 
                                    <MsgBlk icon={LockIcon} title="Security Issue!" content="Collect lots of gifts! Good Luck!" button_content="Send"/> 
                                    <MsgBlk icon={StarIcon} title="Collect Weekend Gift" content="Collect lots of gifts! Good Luck!" button_disabled button_content="Accepted"/> 
                                    <MsgBlk icon={DinmondIcon} title="Anniversary Event" content="Collect lots of gifts! Good Luck!" button_content="Accept"/> 
                                    <MsgBlk icon={LockIcon} title="Security Issue!" content="Collect lots of gifts! Good Luck!" button_content="Send"/> 
                                    <MsgBlk icon={StarIcon} title="Collect Weekend Gift" content="Collect lots of gifts! Good Luck!" button_disabled button_content="Accepted"/> 
                                    <MsgBlk icon={DinmondIcon} title="Anniversary Event" content="Collect lots of gifts! Good Luck!" button_content="Accept"/> 
                                    <MsgBlk icon={LockIcon} title="Security Issue!" content="Collect lots of gifts! Good Luck!" button_content="Send"/> 
                                    <MsgBlk icon={StarIcon} title="Collect Weekend Gift" content="Collect lots of gifts! Good Luck!" button_disabled button_content="Accepted"/> 
                                    <MsgBlk icon={DinmondIcon} title="Anniversary Event" content="Collect lots of gifts! Good Luck!" button_content="Accept"/> 
                                    <MsgBlk icon={LockIcon} title="Security Issue!" content="Collect lots of gifts! Good Luck!" button_content="Send"/> 
                                    <MsgBlk icon={StarIcon} title="Collect Weekend Gift" content="Collect lots of gifts! Good Luck!" button_disabled button_content="Accepted"/> 
                                    <MsgBlk icon={DinmondIcon} title="Anniversary Event" content="Collect lots of gifts! Good Luck!" button_content="Accept"/> 
                                    <MsgBlk icon={LockIcon} title="Security Issue!" content="Collect lots of gifts! Good Luck!" button_content="Send"/> 
                                    <MsgBlk icon={StarIcon} title="Collect Weekend Gift" content="Collect lots of gifts! Good Luck!" button_disabled button_content="Accepted"/> 
                                    <MsgBlk icon={DinmondIcon} title="Anniversary Event" content="Collect lots of gifts! Good Luck!" button_content="Accept"/> 
                                    <MsgBlk icon={LockIcon} title="Security Issue!" content="Collect lots of gifts! Good Luck!" button_content="Send"/> 
                                    <MsgBlk icon={StarIcon} title="Collect Weekend Gift" content="Collect lots of gifts! Good Luck!" button_disabled button_content="Accepted"/> 
                                </div>
                            </PopUpBlock> 
                        </div>  
                    </div>
                </div>
            </div>
        </Template>
    )
}


export default  Messages;