import React from 'react'
import Template from '../helpers/template'
import './style.css' 
import ExpShap from '../../img/shap/expension-title-shap.svg'
import Background from '../../img/eyeke/background.png'
import MapImg from '../../img/location/map.png'
import LocationBlk from '../../img/location/locatLeft.png'
import Location from '../../img/location/location.png'
 


// Location block component
const LocationBlock = (props) => {
    return(
        <div className={"locationBlk "+props.blkClass}>
            <img src={LocationBlk} className="locaShap" alt="" />
            <img src={props.locationImage} className="location" alt="" />
            <h5>{props.locationName}</h5>
        </div> 
    )
}

 
function MapOfLocations () {
    return (
        <Template backg={Background}>
            <div className="map-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mapLocationContents"> 
                                <img src={MapImg} className="mapImages" alt="" />
                                <LocationBlock blkClass="one" locationImage={Location} locationName="City Townhall"/> 
                                <LocationBlock blkClass="two" locationImage="https://wise.com/imaginary/currency-exchange-in-bangkok-thailand-skyline.jpg" locationName="Marketplace"/> 
                                <LocationBlock blkClass="three" locationImage="https://media.istockphoto.com/photos/bangkok-cityscape-picture-id483816132?k=20&m=483816132&s=612x612&w=0&h=w9TX3ICqSQ4mhakng6eJYhcnciMQB6O3awnZzCu1o2Y=" locationName="Bank"/>   
                                <LocationBlock blkClass="rightMode four" locationImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpPBrAV4YJr3u36jHgA6IX08Vqlpmt-6AEE2S3hA94YijmczqeIGHU0nAxuzeFegLgJU&usqp=CAU" locationName="Casino"/> 
                                <LocationBlock blkClass="rightMode five" locationImage="https://us.123rf.com/450wm/prakobkit/prakobkit1804/prakobkit180400037/99912709-wat-arun-temple-and-floating-lantern-in-bangkok-thailand-.jpg?ver=6" locationName="Battle  Stadium"/> 
                                <LocationBlock blkClass="rightMode six" locationImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzAZJWAwTrDvR6V696Stxo2cwjsB5C2Dv2fQ&usqp=CAU" locationName="Assasin Club"/>  
                                <LocationBlock blkClass="rightMode seven" locationImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoJp_LNrG7uaXlWk1gox1MTG3ZGbFMqdO0w&usqp=CAU" locationName="Racing Bell"/>   
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