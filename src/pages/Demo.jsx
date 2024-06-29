import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Demo() {
    const [started, setStarted] = useState(false)
    return (
        <>
        {
            !started && <>
                <div className='introPano'>
                    <Link to={`/`}>
                        <button className='absolute top-5 left-5 bg-[rgb(204,137,13)] p-2 rounded-full z-20 w-12 h-12'>
                            <img className='' src='back.svg' alt='back-button' />
                        </button>
                    </Link>
                    <video className='fullscreen-video' autoPlay loop muted>
                        <source src='demoIntroVid.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <div className='introText'>
                        <div className='bg-black py-10 md:py-14 px-5 rounded-3xl m-14'>
                            <div className='md:mb-12 font-bold text-xl md:text-5xl'>
                                Start the
                                <span className='text-yellow-600'> 360° </span>
                                experience
                            </div>
                            <button onClick={() => setStarted(true)} className='w-1/5 h-1/5 md:w-1/6 md:h-1/6'><img src='play.svg' alt='play-button' /></button>
                        </div>
                    </div>
                </div>
            </>
            }
            {
                started && <>
                
                </>
            }
        </>
    )
}

export default Demo