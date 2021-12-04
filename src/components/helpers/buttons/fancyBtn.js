import './style.css'
import BtnBackground from '../../../img/button/background.png' 
import BtnBackgroundRed from '../../../img/button/red_background.png'
import BigBackground from '../../../img/button/bigBtn.png'
import BigBackgroundRed from '../../../img/button/big_red_background.png'

function FancyButton(props) {
    return (
        <button type="button" className={"theme_btn "+props.className}>
            <img className="backgFirst notSelect" src={props.type === "big" ? BigBackgroundRed  : BtnBackgroundRed} alt="" />
            <img className="backgLast notSelect" src={props.type === "big" ? BigBackground  : BtnBackground} alt="" />
            {props.title}
        </button> 
    )
}

export default FancyButton;