import './style.css'
import Background from '../../img/background.png'
import Template from '../helpers/template/index'
import CoinBlock from '../helpers/coinblk/index'
import TranShap from '../../img/shap/transNum.svg'
import PowerIcon from '../../img/icons/power.svg'
import BlkGreenBtnBkg from '../../img/allegiance/allegiance_btn.png' 
import ThemeBtnBkg from '../../img/shap/themeBtnBackg.svg' 
import BlkBtnSrBackg from '../../img/shap/blockBtnSredBackg.svg'
import CardImg from '../../img/cardImg.png'
import FancyButton from '../helpers/buttons/fancyBtn'
import NormalButton from '../helpers/buttons/normalBtn'

function Avater(){
    return(
        <Template backg={Background}>
            <div className="avater-screen mt-5 mb-5">
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-4">
                            <div className="avater-left-wrp avaterBtnsWrp">
                                <CoinBlock  backg_shape={TranShap} icon={PowerIcon} title="BIG UNSTAKED BALANCE" number="0.0666"/>
                                <FancyButton className="" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="inventory"/> 
                                <FancyButton className="opacity_point_5 pointer_none" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="manage land"/> 
                                <FancyButton className="" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="staking"/> 
                                <FancyButton className="opacity_point_5 pointer_none" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="thunderdoome"/>  
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="avater-middle-wrp">
                                {/* <NormalButton className="s_green small" background={BlkGreenBtnBkg} title="Staking BIG"/>   */}
                                <img src={CardImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="avater-right-wrp avaterBtnsWrp">
                                <CoinBlock  backg_shape={TranShap} icon={PowerIcon} title="BIG UNSTAKED BALANCE" number="0.0000"/>
                                <FancyButton className="" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="collect"/> 
                                <FancyButton className="" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="manage land"/> 
                                <FancyButton className="" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="staking"/> 
                                <FancyButton className="active" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="mafia city"/>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
} 

export default Avater;