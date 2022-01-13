import React from 'react'
import frame from '../../../images/Frame 2.png'
import "./Layer1.css"

export default function Layer1() {
    return (
        <div className="bg-danger">

            <div>
                <h1 className='l1h'>Next-Generation Software Services to Businesses.</h1>
                <p className='l1p'>We help transform businesses through technological services we offer in the form of Web, App, and ERP Software Development.</p>
            </div>

            <div className="L1f">
                <img src={frame} alt="f1" />
            </div>
            
        </div>
    )
}
