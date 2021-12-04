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
import CardAvater from '../../img/card/avater.png'
import FancyButton from '../helpers/buttons/fancyBtn'
import NormalButton from '../helpers/buttons/normalBtn'
import CardBox from '..//helpers/card';

function Avater(){
    return(
        <Template backg={Background}>
            <div className="avater-screen mt-5 mb-5">
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-4">
                            <div className="avater-left-wrp avaterBtnsWrp">
                                <CoinBlock  backg_shape={TranShap} icon={PowerIcon} title="BIG UNSTAKED BALANCE" number="0.0666"/>
                                <FancyButton className="" title="inventory"/> 
                                <FancyButton className="opacity_point_5 pointer_none" title="manage land"/> 
                                <FancyButton className="" title="staking"/> 
                                <FancyButton className="opacity_point_5 pointer_none" title="thunderdoome"/>  
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="avater-middle-wrp">
                                <CardBox title="" top_button="AVATOR" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardAvater} contents={
                                <> <h4>Standard shovel</h4>
                                    <button>Extractor</button>
                                    <p>Charge Time: 80 secs</p>
                                </>} /> 
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="avater-right-wrp avaterBtnsWrp">
                                <CoinBlock  backg_shape={TranShap} icon={PowerIcon} title="BIG UNSTAKED BALANCE" number="0.0000"/>
                                <FancyButton className="" title="collect"/> 
                                <FancyButton className="" title="manage land"/> 
                                <FancyButton className="" title="staking"/> 
                                <FancyButton className="active" title="mafia city"/>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
} 

export default Avater;