import React from 'react'
import sidepic from '../../../images/Group 124.png'
import './Layer2cu.css'

export default function Layer2cu() {
    return (
        <div className="l2cuall">

            <div>
                <img className='l2cupic' src={sidepic} alt="sidepic" />
            </div>

            <div className="deta">
                <h2 className='l2cuh'>Get in touch</h2>
                <form className='fo'>
                    <div class="form-group">
                        <label className='l2cula'>Name*</label>
                        <input type="text" class="form-control inall" placeholder="your name" autoComplete='off' />
                    </div>
                    <div class="form-group">
                        <label className='l2cula'>Email*</label>
                        <input type="email" class="form-control inall" placeholder="example@gmail.com" autoComplete='off' />
                    </div>
                    <div class="form-group">
                        <label className='l2cula'>Department*</label>
                        <input type="text" class="form-control inall" placeholder="please select" autoComplete='off' />
                    </div>
                    <div class="form-group">
                        <label className='l2cula'>Time*</label>
                        <input type="text" class="form-control inall" placeholder="4:00 Available" autoComplete='off' />
                    </div>
                    <button type="submit" class="btn btn-warning buton">Book Your Appointment</button>
                </form>
            </div>
        </div>
    )
}
