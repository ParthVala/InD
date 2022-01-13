import React from 'react'
import Laptop from '../../../images/Laptop.png'
import Html from '../../../images/html-1 1.png'
import Rea from '../../../images/react-2 1.png'
import Javascript from '../../../images/javascript-1 1.png'
import Nodejs from '../../../images/nodejs-icon 1.png'
import Mobile from '../../../images/Mobile.png'
import Pc from '../../../images/Pc.png'
import S from '../../../images/S.png'
import "./Layer2os.css";

export default function Layer2os() {
    return (
        <div className="l2osall">
            <div className='l2pt'>
                
                <img src={Laptop} alt="Laptop" />
                <h3 className="l2osh">Web Development</h3>
                <p className="l2osp">In this day and age, websites are synonymous with business visiting cards. We create websites that convey stories while being the face of your company. We create seamless, interactive websites with the latest technology stack customized specifically to your branding and requirements.</p>
                <img className="l2os1" src={Html} alt="Html" />
                <img className="l2os1" src={Rea} alt="React" />
                <img className="l2os1" src={Javascript} alt="Javascript" />
                <img className="l2os1" src={Nodejs} alt="Nodejs" />

                <img src={Mobile} alt="Mobile" className='mob' />
                <h3 className='l2osh2'>Application Development</h3>
                <p className='l2osp2'>We create apps across platforms for clientele across a range of industries from financial service management to content streaming platforms. We design apps that are robust and offer extensive utility to client requirements.</p>
                <img className="l2os2" src={Html} alt="Html" />
                <img className="l2os2" src={Rea} alt="React" />
                <img className="l2os2" src={Javascript} alt="Javascript" />
                <img className="l2os2" src={Nodejs} alt="Nodejs" />

                <img src={Pc} alt="Pc" className="pc" />
                <h3 className="l2osh3">ERP Development</h3>
                <p className="l2osp3">Our company develops cutting-edge ERP software to manage your business effectively while acting as a central brain to your entire workflow and management.</p>
                <img className="l2os3" src={Html} alt="Html" />
                <img className="l2os3" src={Rea} alt="React" />
                <img className="l2os3" src={Javascript} alt="Javascript" />
                <img className="l2os3" src={Nodejs} alt="Nodejs" />

                <img src={S} alt="S" className='s' />
                <h3 className="l2osh4">AR/VR Development</h3>
                <p className="l2osp4">Augment your experience and make virtual synonymous to real with our latest services in building Augmented Reality apps for education, training, retail.</p>
                <img className="l2os4" src={Html} alt="Html" />
                <img className="l2os4" src={Rea} alt="React" />
                <img className="l2os4" src={Javascript} alt="Javascript" />
                <img className="l2os4" src={Nodejs} alt="Nodejs" />

            </div>
        </div>
    )
}
