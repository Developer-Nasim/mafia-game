import './style.css' 
import TheIcon from '../../helpers/TheIcon/index' 

function CoinBlock(props) {   
    return (
        <div className="single_coin_block">  
            <TheIcon backg_shape={props.backg_shape} icon={props.icon}/> 
            <div className="single_coin_block_details">
                <h5>{props.title}</h5>
                <span>{props.number}</span>
                <div className="bottom_shap"></div>
            </div>
        </div>  
    )
}
 
export default  CoinBlock;