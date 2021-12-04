import './style.css' 
import Shap from '../../../img/shap/shap.svg' 
import PopupBgGreen from '../../../img/popupbgreen.png'
import PopupBgRed from '../../../img/popupbgred.png'
import CloseIcon from '../../../img/close.png'

function PopUpBlock(props) {
    return (
        <div className="popupBlk">
            <img src={props.background === "green" ? PopupBgGreen : PopupBgRed} className="popupBlk-bg notSelect pointer_none" alt="" />
            <button type="button" className="closeIcon"><img src={CloseIcon} className="notSelect" alt="" /></button>
            <div className="popupBlk-titles">
                <h5>{props.heading}</h5>
                <img src={Shap} className="notSelect" alt="" />
            </div>  
            {props.children}
        </div>
    )
}

export default PopUpBlock;