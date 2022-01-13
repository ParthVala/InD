import React from 'react'
import per from '../../../images/Rectangle 117.png'
import per1 from '../../../images/Rectangle 117 (1).png'
import per2 from '../../../images/Rectangle 117 (2).png'
import per3 from '../../../images/Rectangle 117 (3).png'
import per4 from '../../../images/Rectangle 117 (4).png'
import per5 from '../../../images/Rectangle 117 (5).png'
import './Layer4ca.css';

export default function Layer4ca() {
    return (
        <div className='ooool'>

            <div>
                <h2 className="l4cah">Our Perks</h2>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Competitive pay</h5>
                        <p className="card-text l4cap">Looking for a great salary and solid stock options? You’ve come to the right place</p>
                    </div>
                    </div>
                </div>
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per1} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Flexible schedule</h5>
                        <p className="card-text l4cap">Do the work you need to get done in the time you have to get it done</p>
                    </div>
                    </div>
                </div>
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per2} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Amazing benefits</h5>
                        <p className="card-text l4cap">Medical, dental, vision, 401k, FSA, commuter… we’ve got you covered</p>
                    </div>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per3} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Flexible vacation</h5>
                        <p className="card-text l4cap">We work to live, not live to work. So go on, book that dream vacation</p>
                    </div>
                    </div>
                </div>
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per4} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Health & wellness</h5>
                        <p className="card-text l4cap">A healthy body supports a healthy mind, so we partner with Crunch Fitness and CorePower</p>
                    </div>
                    </div>
                </div>
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per5} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Family-friendly</h5>
                        <p className="card-text l4cap">From flexible scheduling to parental leave to kids’ birthdays off, we support Sigma families</p>
                    </div>
                    </div>
                </div>
            </div>



            {/* <div>
                <h2 className="l4cah">Our Perks</h2>
            </div>

            <div>
                <img src={per} alt="per" />
                <h4>Competitive pay</h4>
                <p>Looking for a great salary and solid stock options? You’ve come to the right place.</p>

                <img src={per1} alt="per" />
                <h4>Flexible schedule</h4>
                <p>Do the work you need to get done in the time you have to get it done</p>

                <img src={per2} alt="per" />
                <h4>Amazing benefits</h4>
                <p>Medical, dental, vision, 401k, FSA, commuter… we’ve got you covered.</p>

                <img src={per3} alt="per" />
                <h4>Flexible vacation</h4>
                <p>We work to live, not live to work. So go on, book that dream vacation.</p>

                <img src={per4} alt="per" />
                <h4>Health & wellness</h4>
                <p>A healthy body supports a healthy mind, so we partner with Crunch Fitness and CorePower.</p>

                <img src={per5} alt="per" />
                <h4>Family-friendly</h4>
                <p>From flexible scheduling to parental leave to kids’ birthdays off, we support Sigma families.</p>
            </div> */}
        </div>
    )
}
