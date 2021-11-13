import React from 'react'
import './style.css' 

function ProgressBlock(props) {
    const style = {
        width: props.prog_width + "%"
    }
    return(
        <div className={"prgBlk "+props.theme}> 
            <div className="progs">
                <div className="prog_bar" style={style}></div>
                <span>{props.value}</span>
            </div>
        </div>
    )
}
  

export default  ProgressBlock;