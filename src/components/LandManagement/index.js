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
 
 
function LandManagement () {
    return (
        <Template backg={Background}>
            <div className="landmanagment-area mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionTitle title="Land Management" class/> 
                        </div>
                        <div className="col-lg-3 offset-lg-2">
                            <div className="exp-blk full-width">
                                <div className="exp-title">
                                    <img className="notSelect" src={ExpShap} alt="" />
                                    <span>Land #2345778</span>
                                </div>
                                <div className="exp-blk-details">
                                    <div className="numbs"><img className="notSelect" src={Numb1} alt="" /> 1</div>
                                    <img className="details_img" src={Hill} alt="" />
                                    <h3>Land Info</h3>
                                    <Table>
                                        <tr>
                                            <td>Resources collecting rate</td> 
                                        </tr>
                                        <tr>
                                            <td>Status: <span>Available</span></td> 
                                        </tr>
                                        <tr>
                                            <td>Tax: <span>10%</span></td> 
                                        </tr>
                                        <tr>
                                            <td>Render info</td> 
                                        </tr> 
                                    </Table> 
                                    <img src={BtmShap} className="bottom-shap notSelect" alt="" />
                                </div>
                            </div> 
                        </div> 
                        <div className="col-lg-4 offset-lg-1">
                            <div className="claiming-blk">
                                <img src={ClaimingBlk} className="claiming-bg notSelect" alt="" />
                                <div className="clm-titles">
                                    <h5>Land Status</h5>
                                    <img src={Shap} className="notSelect" alt="" />
                                </div>
                                <h4>Current Tax Rate - 45%</h4> 
                                <br />
                                <p>Renter Info</p>
                                <Table>
                                    <tr>
                                        <td>Renter ID: <span>4353463378</span></td> 
                                    </tr>
                                    <tr>
                                        <td>Collect materials statistic:</td> 
                                    </tr>
                                    <tr>
                                        <td>XXXXXXXXXXXXXXXXXX</td> 
                                    </tr>
                                    <tr>
                                        <td>XXXXXXXXXXXXXXXXXX</td> 
                                    </tr> 
                                </Table>
                                <small>Change Tax Rate only can be done with “For Rent” Land</small>
                                <button type="button" className="block_btn"><img className="notSelect" src={BlkBtnBkg} alt="" />End Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}


export default  LandManagement;