import React from 'react'
import picW from '../../../images/Rectangle 112.png';
import facebook from '../../../images/facebook.png';
import twitter from '../../../images/twitter.png';
import telegram from '../../../images/telegram.png';
import instagram from '../../../images/instagram.png';
import "./Layer5.css";

export default function Layer5() {
    return (
        <div >
            <div className="l5all">
                <img className='logo' src={picW} alt="Infinium DevIO" />
                
                <div>
                    <a className='fbtn an' href="/">Home</a>
                    <a className='fbtn an' href="/">About Us</a>
                    <a className='fbtn an' href="/">Our Service</a>
                    <a className='fbtn an' href="/">Careers</a>

                    <a className='smlogo f ' href="/"><img src={facebook} alt="facebook" /></a>
                    <a className='smlogo ' href="/"><img src={twitter} alt="twitter" /></a>
                    <a className='smlogo ' href="/"><img src={telegram} alt="telegram" /></a>
                    <a className='smlogo ' href="/"><img src={instagram} alt="instagram" /></a>

                    <br />

                    <hr className='thinl' />

                    <a className='belowh an lleter' href="/">Privacy Policy</a>
                    <a className='belowh an lleter' href="/">Term of Use</a>
                    <a className='belowh an lleter' href="/">Legal</a>

                </div>
            </div>
        </div>
    )
}
