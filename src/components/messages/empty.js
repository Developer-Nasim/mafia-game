import React from 'react'
import Template from '../helpers/template'
import './style.css' 
import MsgBackground from '../../img/messages/msgBackg.png'  
import BigMsgIcon from '../../img/icons/bigMsg.svg'
import PopUpBlock from '../helpers/popupBlock'
 
 
function EmptyMessages() {
    return (
        <Template backg={MsgBackground}>
            <div className="messages-area mt-5 mb-5">
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-8 offset-lg-2">
                            <PopUpBlock background="" heading="Messages"> 
                                <div className="empty_message">
                                    <img src={BigMsgIcon} alt="" />
                                    <p>No available messages!</p>
                                </div> 
                            </PopUpBlock> 
                        </div>  
                    </div>
                </div>
            </div>
        </Template>
    )
}


export default  EmptyMessages;