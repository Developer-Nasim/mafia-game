import React from 'react'
import './style.css' 
import CoinBlock from '../../helpers/coinblk/index'
import TheIcon from '../../helpers/TheIcon/index'
import ProgressBlock from '../../helpers/progress/index'
import BackBTN from '../../../img/back.png'
import ProfileAvater from '../../../img/avater.png'
import PowerIcon from '../../../img/icons/power.svg'
import AskIcon from '../../../img/icons/ask.svg'
import HandIcon from '../../../img/icons/hands.svg'
import SettingsIcon from '../../../img/icons/settings.svg'
import NotifcIcon from '../../../img/icons/notif.svg'
import HomeIcon from '../../../img/icons/home.svg' 
import ProfileAngle from '../../../img/profileAngle.png'
import Timers from '../../../img/icons/time.svg'
import TranShap from '../../../img/shap/transNum.svg'
import RowShap from '../../../img/shap/rowShap.svg'
import GreadShap from '../../../img/shap/greadShap.svg'
 

function Header() {  

    return (
        <>
            <div className="header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header_all_blks"> 
                                <div className="header-left-wrp"> 
                                    <button className="backBtn"><img className="notSelect" src={BackBTN} alt="" /></button> 
                                    <div className="sort-profile">
                                        <div className="sort-profile_avater">  
                                            <img className="angles notSelect" src={ProfileAngle} alt="" />
                                            <img className="Avater notSelect" src={ProfileAvater} alt="" />
                                            <span>01</span>
                                        </div>
                                        <div className="sort-profile_details">
                                            <h4>Avatar Name</h4>
                                            <ProgressBlock value="40/100" prog_width="40" theme="soft_blue"/>
                                            <ProgressBlock value="60/100" prog_width="60" theme="soft_red"/>
                                        </div>
                                    </div>
                                </div> 
                                <div className="allTopBlk"> 
                                    <CoinBlock  backg_shape={TranShap} icon={PowerIcon} title="BIG UNSTAKED BALANCE" number="0.0666"/>
                                    <CoinBlock  backg_shape={RowShap} icon={Timers} title="BIG UNSTAKED BALANCE" number="0.0666"/>
                                </div> 
                                <div className="header-action-icons">  
                                    <TheIcon backg_shape={GreadShap} icon={AskIcon}/>
                                    <TheIcon backg_shape={GreadShap} icon={HandIcon}/>
                                    <TheIcon backg_shape={GreadShap} icon={SettingsIcon}/>
                                    <TheIcon backg_shape={GreadShap} icon={NotifcIcon}/>
                                    <TheIcon backg_shape={GreadShap} icon={HomeIcon}/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default  Header;