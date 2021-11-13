import React from 'react'
import Template from '../helpers/template'
import './style.css' 
import ExpShap from '../../img/shap/expension-title-shap.svg'
import Background from '../../img/background.png' 
import MapImg from '../../img/map_location.png'  
 
 
function MapOfLocations () {
    return (
        <Template backg={Background}>
            <div className="map-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mapLocationContents"> 
                                <img src={MapImg} alt="" /> 
                            </div>
                        </div>
                        <div className="col-lg-12"> 
                            <div className="exp-title">
                                <img className="notSelect" src={ExpShap} alt="" />
                                <span>Select Location</span>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </Template>
    )
}


export default MapOfLocations;