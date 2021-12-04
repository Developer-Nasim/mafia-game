import './style.css'
import CardBackground from '../../../img/card/cardBackg.png'
import BlkGreenBtnBkg from '../../../img/allegiance/allegiance_btn.png' 
import NormalButton from '../buttons/normalBtn' 
import CardBackgMiddle from '../../../img/card/cardBackgMiddle.png'
import Star from '../../../img/card/star.png'
import StarTwo from '../../../img/card/star2.png'
import Icon from '../../../img/card/icon.png'
import Icon2 from '../../../img/card/icon2.png'
import Icon3 from '../../../img/card/icon3.png'
import Icon4 from '../../../img/card/icon4.png'
import Icon5 from '../../../img/card/icon5.png'
import Icon6 from '../../../img/card/icon6.png'

function CardBox(props) {
    return(
        <div className="cardBox">
            <img src={CardBackground} className="CardBackground notSelect pointer_none" alt="" />
            <img src={CardBackgMiddle} className="trans_backgrounds" alt="" />
            <div className="cardHeader">
                {props.title ? <h5>class/race</h5> : ""}
                {props.top_button ? <NormalButton className="s_green" background={BlkGreenBtnBkg} title={props.top_button}/> : ""}
                {/* <NormalButton className="s_green" background={BlkGreenBtnBkg} title="Tool 1"/>   */}
            </div>
            <div className="cardNumbers">
                <h5>{props.numb}</h5>
                <h5>{props.numb2}</h5>
                <h5>{props.numb3}</h5>
                <h5>{props.numb4}</h5>
            </div>
            <img src={props.content_img} className="content_img" alt="" />
            <div className="card_icons">
                <button><img className="notSelect pointer_none" src={Icon} alt="" /></button>
                <button><img className="notSelect pointer_none" src={Icon2} alt="" /></button>
                <button><img className="notSelect pointer_none" src={Icon3} alt="" /></button>
                <button><img className="notSelect pointer_none" src={Icon4} alt="" /></button>
                <button><img className="notSelect pointer_none" src={Icon5} alt="" /></button>
                <button><img className="notSelect pointer_none" src={Icon6} alt="" /></button>
            </div>
            <div className="card_wrp">
                {props.contents} 
            </div>
            <div className="card_stars">
                <button><img className="notSelect pointer_none" src={Star} alt="" /></button>
                <button><img className="notSelect pointer_none" src={Star} alt="" /></button>
                <button><img className="notSelect pointer_none" src={Star} alt="" /></button>
                <button><img className="notSelect pointer_none" src={Star} alt="" /></button>
                <button><img className="notSelect pointer_none" src={StarTwo} alt="" /></button> 
            </div>
        </div>
    )
}


export default CardBox;