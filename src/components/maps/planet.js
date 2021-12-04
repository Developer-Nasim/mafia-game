import React from 'react'
import Template from '../helpers/template'
import './style.css'
import Background from '../../img/eyeke/background.png'
import SectionTitle from '../helpers/sectionTitle/index'  
import ThemeBtnBkg from '../../img/shap/themeBtnBackg.svg' 
import BlkBtnSrBackg from '../../img/shap/blockBtnSredBackg.svg'
import MapImg from '../../img/location/mapFirst.png'
import MapMarkar from '../../img/location/mapmarkar.png'
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
                                <div className="mpLocs">
                                    <img src={MapImg} className="mapImg" alt="" />
                                    <img src={MapMarkar} className="markar one" alt="" />
                                    <img src={MapMarkar} className="markar two" alt="" />
                                    <img src={MapMarkar} className="markar three" alt="" />
                                    <img src={MapMarkar} className="markar four" alt="" />
                                    <img src={MapMarkar} className="markar five" alt="" />
                                    <img src={MapMarkar} className="markar six" alt="" />
                                    <img src={MapMarkar} className="markar seven" alt="" />
                                    <img src={MapMarkar} className="markar eight" alt="" />
                                </div>
                                <div className="btns">
                                    <FancyButton className="" type="big" title="I want to stay on my current land"/> 
                                    <FancyButton className="" type="big" title="Change Planet"/> 
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