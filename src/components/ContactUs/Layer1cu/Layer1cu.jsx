import React from 'react'
import frame from '../../../images/Layer 5.png'
import "./Layer1cu.css";

export default function Layer1cu() {
    return (
        <div className='l1cuall'>

            <div>
                <h2 className='l1cuh'>Start A New Journey With Us.</h2>
                <p className='l1cup'>We would love to offer your our services in technological development while we strive to maintain long-term relationships with our clients.</p>
            </div>

            <div>
                <img className='l1cuf' src={frame} alt="frame" />
            </div>

        </div>
    )
}
