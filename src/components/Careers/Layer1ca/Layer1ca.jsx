import React from 'react'
import frame from '../../../images/Layer 6.png'
import './Layer1ca.css';

export default function Layer1ca() {
    return (
        <div>
            <div>
                <h2 className='l1cah2'>Careers at Infiniumdev<span className='teo'>IO</span> LLP</h2>
                <h5 className='l1cah5'>Eager to be a part of something new and revolutionary?</h5>
                <p className='l1cap'>We are not looking for regular ‘employees’ but rather are looking for changemakers who could join our company and make an impact with their skillset.</p>
                <button type="submit" className='btn btn-outline-warning btns'>View Open Position</button>
                <br />
                <button type="submit" className='btn btn-outline-secondary btns1'>Internship</button>
            </div>

            <div>
                <img className='l1caf' src={frame} alt="frame" />
            </div>
        </div>
    )
}
