import React from 'react'
import frame from '../../../images/Layer 7.png'
import './Layer5ca.css';

export default function Layer5ca() {
    return (
        <div>
            <div>
                <h2 className='l5cah'>Infiniumdev<span className='teo'>IO</span> LLP Internship Program</h2>
                <p className='l5cap'>The Intern Program has served as an incredible opportunity to help students get a full-time opportunity with InfiniumDevIO LLP or build the networks to be onboarded by some of the other leading companies or start-ups around the world!</p>
                <button className='l5cabt btn btn-warning' type="submit">Apply Here</button>
            </div>

            <div>
                <img className='l5caf' src={frame} alt="frame" />
            </div>
        </div>
    )
}
