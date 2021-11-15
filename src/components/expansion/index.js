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
import Hill2 from '../../img/hill2.png'
import Hill3 from '../../img/hill3.png'
import BlkBtnBkg from '../../img/shap/blockBtnBackg.svg'
import BlkGreenBtnBkg from '../../img/shap/blockBtnGreenBackg.svg'
import BlkSoftRedBtnBkg from '../../img/shap/blockBtnSoft_redBackg.svg'
import BlkRedBtnBkg from '../../img/shap/blockBtnRedBackg.svg'
import ThemeBtnBkg from '../../img/shap/themeBtnBackg.svg'
import SoftRedTitle from '../../img/shap/soft_red.svg'
import RedTitle from '../../img/shap/red.svg'
import Numb1 from '../../img/angleBlue.png'
import Numb2 from '../../img/angleSoftRed.png'
import Numb3 from '../../img/angleRed.png'
import FancyButton from '../helpers/buttons/fancyBtn'
import NormalButton from '../helpers/buttons/normalBtn'


// Table component
const Table = (props) => {
    return (
        <table>
            <tbody>
                {props.children }
            </tbody>
        </table>
    )
}
 
 
function Expensions() {
    return (
        <Template backg={Background}>
            <div className="expension-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionTitle title="Expension" class/> 
                        </div>
                        <div className="col-lg-4">
                            <div className="claiming-blk">
                                <img src={ClaimingBlk} className="claiming-bg notSelect" alt="" />
                                <div className="clm-titles">
                                    <h5>Resources Statistic</h5>
                                    <img src={Shap} className="notSelect" alt="" />
                                </div>
                                <Table>
                                    <tr>
                                        <td>BMTL</td>
                                        <td>9999.999</td>
                                        <td>5 units/hour</td>
                                    </tr>
                                    <tr>
                                        <td>LSM</td>
                                        <td>9999.999</td>
                                        <td>5 units/hour</td>
                                    </tr>
                                    <tr>
                                        <td>MNRL</td>
                                        <td>9999.999</td>
                                        <td>5 units/hour</td>
                                    </tr>
                                    <tr>
                                        <td>OCP</td>
                                        <td>9999.999</td>
                                        <td>5 units/hour</td>
                                    </tr>
                                    <tr>
                                        <td>REE</td>
                                        <td>9999.999</td>
                                        <td>5 units/hour</td>
                                    </tr>
                                    <tr>
                                        <td>XPS</td>
                                        <td>9999.999</td>
                                        <td>5 units/hour</td>
                                    </tr>
                                    <tr>
                                        <td>Culture</td>
                                        <td>9999.999</td>
                                        <td>5 units/hour</td>
                                    </tr>
                                </Table>
                                <button type="button" className="block_btn"><img className="notSelect" src={BlkBtnBkg} alt="" /> Claim All</button>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="expensions">
                                <div className="exp-blk">
                                    <div className="exp-title">
                                        <img className="notSelect" src={ExpShap} alt="" />
                                        <span>Land #2345778</span>
                                    </div>
                                    <div className="exp-blk-details">
                                        <div className="numbs"><img className="notSelect" src={Numb1} alt="" /> 1</div>
                                        <img className="details_img" src={Hill} alt="" />
                                        <Table>
                                            <tr>
                                                <td>BMTL</td>
                                                <td>5 units/hour</td>
                                            </tr>
                                            <tr>
                                                <td>LSM</td>
                                                <td>5 units/hour</td>
                                            </tr>
                                            <tr>
                                                <td>MNRL</td>
                                                <td>5 units/hour</td>
                                            </tr>
                                            <tr>
                                                <td>OCP</td>
                                                <td>5 units/hour</td>
                                            </tr>
                                            <tr>
                                                <td>REE</td>
                                                <td>5 units/hour</td>
                                            </tr>
                                            <tr>
                                                <td>XPS</td>
                                                <td>5 units/hour</td>
                                            </tr> 
                                        </Table>
                                        <NormalButton className="green small" background={BlkGreenBtnBkg} title="Claim"/> 
                                        <img src={BtmShap} className="bottom-shap notSelect" alt="" />
                                    </div>
                                </div>
                                <div className="exp-blk softRed">
                                    <div className="exp-title">
                                        <img className="notSelect" src={SoftRedTitle} alt="" />
                                        <span>Land #2345778</span>
                                    </div>
                                    <div className="exp-blk-details">
                                        <div className="numbs"><img className="notSelect" src={Numb2} alt="" /> 3</div>
                                        <img className="details_img" src={Hill2} alt="" />
                                        <Table>
                                            <tr>
                                                <td>BMTL</td>
                                                <td>5 units/hour</td>
                                            </tr>
                                            <tr>
                                                <td>LSM</td>
                                                <td>5 units/hour</td>
                                            </tr>
                                            <tr>
                                                <td>MNRL</td>
                                                <td>5 units/hour</td>
                                            </tr>
                                            <tr>
                                                <td>OCP</td>
                                                <td>5 units/hour</td>
                                            </tr>
                                            <tr>
                                                <td>REE</td>
                                                <td>5 units/hour</td>
                                            </tr>
                                            <tr>
                                                <td>XPS</td>
                                                <td>5 units/hour</td>
                                            </tr> 
                                        </Table>
                                        <NormalButton className="soft_red small" background={BlkSoftRedBtnBkg} title="Claim"/> 
                                        <img src={BtmShap} className="bottom-shap notSelect" alt="" />
                                    </div>
                                </div>
                                <div className="exp-blk red">
                                    <div className="exp-title">
                                        <img className="notSelect" src={RedTitle} alt="" />
                                        <span>Land #2345778</span>
                                    </div>
                                    <div className="exp-blk-details">
                                        <div className="numbs"><img className="notSelect" src={Numb3} alt="" /> 5</div>
                                        <img className="details_img" src={Hill3} alt="" />
                                        <Table>
                                            <tr>
                                                <td>BMTL</td>
                                                <td>5 units/hour</td>
                                            </tr>
                                            <tr>
                                                <td>LSM</td>
                                                <td>5 units/hour</td>
                                            </tr>
                                            <tr>
                                                <td>MNRL</td>
                                                <td>5 units/hour</td>
                                            </tr>
                                            <tr>
                                                <td>OCP</td>
                                                <td>5 units/hour</td>
                                            </tr>
                                            <tr>
                                                <td>REE</td>
                                                <td>5 units/hour</td>
                                            </tr>
                                            <tr>
                                                <td>XPS</td>
                                                <td>5 units/hour</td>
                                            </tr> 
                                        </Table>
                                        <NormalButton className="red small" background={BlkRedBtnBkg} title="Claim"/> 
                                        <img src={BtmShap} className="bottom-shap notSelect" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="bottomBtns">
                                <FancyButton className="" title="Inventory"/>
                                <FancyButton className="" title="Land Management"/>
                                <FancyButton className="" title="Staking"/>
                                <FancyButton className="" title="Collecting"/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}


export default  Expensions;