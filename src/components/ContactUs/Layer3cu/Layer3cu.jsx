import React from 'react'
import MapLocation from '../../../images/Rectangle 19.png'
import './Layer3cu.css'

export default function Layer3cu() {
    return (
        <div className='l3cuall'>
            <div>
                <h2 className='l3cuh'>Address</h2>
                <img className='l3cuim' src={MapLocation} alt="MapLocation" />
            </div>

            <div>
                <p className='p1 p111'>550 Iscon Emporio, <br /> Besides Star Bazaar, Jodhpur Cross Rd, Satellite, <br /> Ahmedabad, Gujarat 380015</p>
                <p className='p1'>+234 081-1236-4568 <br /> hello@info.com.ng </p>
            </div>
        </div>
    )
}
