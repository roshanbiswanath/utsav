import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import '../App.css'

function Intro360() {
    return (
        <div className='h-full overflow-hidden relative'>
            <video className='w-screen h-screen object-cover' autoPlay loop muted>
                <source src='https://utsavvrfiles.s3.ap-south-1.amazonaws.com/introvid.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className='absolute top-0 left-0 h-full w-full text-white text-2xl text-center p-8 z-10 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.6)] gap-y-5 md:gap-y-9'>
                <div className='text-7xl md:text-9xl flex flex-wrap justify-center items-center text-center font-semibold'>
                    <div >Utsav</div>
                    <div className='text-[rgb(204,137,13)]' >VR</div>
                </div>
                <div className='text-3xl md:text-5xl max-w-3xl'>
                    The first-ever 360° Virtual reality experience of the Rath Yatra!
                </div>
                <Link to={`glimpse`}>
                    <button className="px-10 py-3 text-base md:text-xl rounded-full bg-yellow-600 font-bold text-white transform hover:scale-105 hover:bg-yellow-500 transition-colors duration-200">
                        Try the 360° experience now
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Intro360;