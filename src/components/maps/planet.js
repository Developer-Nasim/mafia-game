import React from 'react'
import Template from '../helpers/template'
import './style.css'
import SectionTitle from '../helpers/sectionTitle/index'  
import ThemeBtnBkg from '../../img/shap/themeBtnBackg.svg' 
import BlkBtnSrBackg from '../../img/shap/blockBtnSredBackg.svg'
import Background from '../../img/background.png' 
import MapImg from '../../img/map.png' 
import FancyButton from '../helpers/buttons/fancyBtn'  
 
 
function MapOfPlanet () {
    return (
        <Template backg={Background}>
            <div className="map-area mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionTitle title="Map of Planet Magor" class/> 
                        </div> 
                        <div className="col-lg-12"> 
                            <div className="mapContents">
                                <h5>Select the piece of land you want to see more details of</h5>
                                <img src={MapImg} alt="" />
                                <div className="btns">
                                    <FancyButton className="" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="I want to stay on my current land"/> 
                                    <FancyButton className="" backgFirst={BlkBtnSrBackg} backLast={ThemeBtnBkg} title="Change Planet"/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}


export default  MapOfPlanet;