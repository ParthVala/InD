import React from 'react'
import grppic from '../../../images/Group 73.png'
import './Layer3ca.css'

export default function Layer3ca() {
    return (
        <div>
            <div>
                <h2 className='l3cah'>Our Culture</h2>
                <p className='l3cap1'>Since the beginning, Sigma has worked to understand technology trends and build innovative solutions that support the growing need for people to take control of their own data story. Our Worksheet draws inspiration from spreadsheets and visual programming. Our Dashboards draw inspiration from interactive website builders and dataflow environments.</p>
                <p className='l3cap2'>As a result, our product is quite different from what came before it. This presents our team with a steady stream of exciting challenges. These in turn drive our culture of internal experimentation, great technical execution, and widespread customer empathy.</p>
            </div>

            <div>
                <img className="l3capic" src={grppic} alt="grppic" />
            </div>
        </div>
    )
}
