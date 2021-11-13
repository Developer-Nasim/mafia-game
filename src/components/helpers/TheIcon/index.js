import './style.css' 
// Icon
const TheIcon = (props) => {
    return(
        <button type="button" className="the_icon"><img src={props.backg_shape} className="backShap notSelect" alt="" /> <img className="icon notSelect" src={props.icon} alt="" /> </button> 
    )
}  

export default  TheIcon;