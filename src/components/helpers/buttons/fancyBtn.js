import './style.css'
function FancyButton(props) {
    return (
        <button type="button" className={"theme_btn "+props.className}>
            <img className="backgFirst notSelect" src={props.backgFirst} alt="" />
            <img className="backgLast notSelect" src={props.backLast} alt="" />
            {props.title}
        </button> 
    )
}

export default FancyButton;