import React, { useRef,useState,useEffect } from 'react'
import './style.css'
import {Link } from "react-router-dom"; 
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





// Progress
const Progress = (props) => {
    const style = {
        width: props.prog_width + "%"
    }
    return(
        <div className={"prgBlk "+props.theme}> 
            <div className="progs">
                <div className="prog_bar" style={style}></div>
                <span>{props.value}</span>
            </div>
        </div>
    )
}

// TopBlk
const TopBLk = (props) => {
    return(
        <div className="single_coin_block">  
            <button type="button" className="the_icon"><img src={props.backg_shape} className="backShap notSelect" alt="" /> <img className="icon notSelect" src={props.icon} alt="" /> </button> 
            <div className="single_coin_block_details">
                <h5>{props.title}</h5>
                <span>{props.number}</span>
                <div className="bottom_shap"></div>
            </div>
        </div>  
    )
} 

// Icon
const TheIcon = (props) => {
    return(
        <button type="button" className="the_icon"><img src={props.backg_shape} className="backShap notSelect" alt="" /> <img className="icon notSelect" src={props.icon} alt="" /> </button> 
    )
} 


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
                                            <Progress value="40/100" prog_width="40" theme="soft_blue"/>
                                            <Progress value="60/100" prog_width="60" theme="soft_red"/>
                                        </div>
                                    </div>
                                </div> 
                                <div className="allTopBlk"> 
                                    <TopBLk  backg_shape={TranShap} icon={PowerIcon} title="BIG UNSTAKED BALANCE" number="0.0666"/>
                                    <TopBLk  backg_shape={RowShap} icon={Timers} title="BIG UNSTAKED BALANCE" number="0.0666"/>
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