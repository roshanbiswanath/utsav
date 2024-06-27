import React, { useEffect } from 'react'

import { TypewriterEffectSmooth } from "./ui/typewritter-effect";
import '../App.css'

function Intro360() {

    const words = [
        {
            text: "Celebrate",
        },
        {
            text: "Everyday",
        }
    ];
    return (
        <div className='introPano'>
            <video className='fullscreen-video' autoPlay loop muted>
                <source src='introvid.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className='introText'>
                <div className='introHeading'>
                    <div >Utsav</div>
                    <div className='orange' >VR</div>
                </div>
                <div className="flex flex-col items-center justify-center text-white">
                    <TypewriterEffectSmooth words={words} />
                </div>
            </div>
        </div>
    );
}

export default Intro360;