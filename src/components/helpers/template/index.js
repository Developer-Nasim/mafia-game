import React, { useRef,useState,useEffect } from 'react'
import './style.css'
import Header from '../header'
 

function Template(props) {   
    return (
        <div className="template_body" style={{ backgroundImage: "url("+props.backg+")",backgroundSize:"cover",backgroundPosition:"center" }}>
            <Header />
            { props.children }
        </div>
    )
}
 
export default  Template;