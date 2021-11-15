import React,{useEffect,useState} from 'react'
import Template from '../helpers/template'
import './style.css' 
import MsgBackground from '../../img/messages/msgBackg.png'  
import BlkGreenBtnBkg from '../../img/allegiance/allegiance_btn.png'
import VolBorder from '../../img/settings/volBorder.png'
import VolBar from '../../img/settings/volBar.png'
import VolHandle from '../../img/settings/handle.png'
import PopUpBlock from '../helpers/popupBlock'
import NormalButton from '../helpers/buttons/normalBtn'


// Volume ranges
const VolumeRanges = (props) => {
    const [ RangNum,setRangNum ] = useState(20);
    const ChangingRang = (e) => {
        setRangNum((d) => e.target.value)
    }
    useEffect(() => {
        setRangNum(props.number);
    }, [])
    return(
        <div className="volumRang"> 
            <div className="volRang">
                <img src={VolBorder} className="volBorder" alt="" />
                <img src={VolBar} style={{ width:RangNum+"%" }} className="volBar" alt="" />
                <img src={VolHandle} style={{ left:RangNum+"%" }} className="volHandle notSelect" alt="" />
                <input type="range" min="0" max="100" value={RangNum} onChange={(e) => ChangingRang(e)} />
            </div>
            <span>{RangNum}%</span>
        </div> 
    )
}

  
function Settings() {
  
    return (
        <Template backg={MsgBackground}> 
            <div className="settings-area mt-5 mb-5">
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-8 offset-lg-2">
                            <PopUpBlock background="" heading="Setttings">
                                <div className="settings"> 
                                    <h2><span>Volume</span></h2>
                                    <div className="volumes">
                                        <ul>
                                            <li>
                                                <span>Music</span>  
                                                <VolumeRanges number={20}/>
                                            </li>  
                                            <li>
                                                <span>SFX</span> 
                                                <VolumeRanges number={60}/>
                                            </li> 
                                            <li>
                                                <span>Collect SFX</span> 
                                                <VolumeRanges number={40}/>
                                            </li> 
                                        </ul> 
                                    </div>
                                    <h2><span>Support</span></h2>
                                    <ul>
                                        <li>
                                            <span>Official Discord channel</span> 
                                            <NormalButton className="s_green small" background={BlkGreenBtnBkg} title="Connect"/>  
                                        </li>
                                        <li>
                                            <span>Telegram Support</span> 
                                            <NormalButton className="s_green small" background={BlkGreenBtnBkg} title="Connect"/>  
                                        </li>
                                    </ul>
                                </div>
                            </PopUpBlock> 
                        </div>  
                    </div>
                </div>
            </div>
        </Template>
    )
}


export default Settings;