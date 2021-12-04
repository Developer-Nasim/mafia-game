import React from 'react'
import Template from '../helpers/template'
import './style.css' 
import MsgBackground from '../../img/messages/msgBackg.png' 
import CardContent from '../../img/bag/shap.png' 
import CardBox from '../helpers/card'; 
import TheSlider from "../helpers/slider/index";
import PopUpBlock from '../helpers/popupBlock'

  
function MyBag() {
    return (
        <Template backg={MsgBackground}>
            <div className="bag-area mt-5 mb-5">
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-8 offset-lg-2">
                            <PopUpBlock background="" heading="My Bag">
                                <div className="bags"> 
                                    <TheSlider dots={false} loop={false} speed={500} arrows={false} slideShow={4} SlideScroll={2}> 
                                        <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                        <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                            <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                        </div>} />  
                                        <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                        <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                            <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                        </div>} />  
                                        <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                        <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                            <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                        </div>} />  
                                        <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                        <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                            <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                        </div>} />  
                                        <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                        <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                            <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                        </div>} />  
                                        <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                        <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                            <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                        </div>} />  
                                        <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                        <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                            <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                        </div>} />  
                                        <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                        <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                            <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                        </div>} />  
                                        <CardBox title="CLASS/RACE" top_button="" numb="15" numb2="15" numb3="15" numb4="15" content_img={CardContent} contents={
                                        <div className="cardWrpsContents"> <h4>CARD NAME</h4> 
                                            <p>CARRD DESCRIPTION AND OTHER TEXTS RELATED TO THIS CARD</p>
                                        </div>} />  
                                    </TheSlider>
                                </div>
                            </PopUpBlock> 
                        </div>  
                    </div>
                </div>
            </div>
        </Template>
    )
}


export default  MyBag;