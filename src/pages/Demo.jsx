import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber"
import Scene from '../components/Scene'
import DemoUI from '../components/DemoUI';
import { state } from '../state/state';
import { useSnapshot } from 'valtio';

function Demo() {

    const [started, setStarted] = useState(false)

    const videoList = ['vid1.mp4', 'vid2.mp4', 'vid3.mp4']

    const snap = useSnapshot(state)

    return (
        <div className='h-screen'>
            {
                !started && <>
                    <div className='h-full overflow-hidden relative'>
                        <Link to={`/`}>
                            <button className='absolute top-5 left-5 bg-[rgb(204,137,13)] p-2 rounded-full z-20 w-12 h-12'>
                                <img className='' src='back.svg' alt='back-button' />
                            </button>
                        </Link>
                        <video className='w-screen h-screen object-cover' autoPlay loop muted>
                            <source src='https://utsavvrfiles.s3.ap-south-1.amazonaws.com/demoIntroVid.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                        <div className='absolute top-0 left-0 h-full w-full text-white text-2xl text-center p-8 z-10 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.6)] gap-y-5 md:gap-y-9'>
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
                started &&
                <div className='h-full overflow-hidden relative'>
                    <DemoUI />

                    {
                        // Style display none for the video tag
                        videoList.map((video, index) => {
                            return (
                                <>
                                    {<video id={"vid" + index} key={index} style={{ display: 'none' }} crossOrigin='anonymous' onEnded={() => {
                                        if (snap.currentVideo == 2) {
                                            console.log('ended')
                                        } else {
                                            state.currentVideo++
                                        }
                                    }}>
                                        <source src={"https://utsavvrfiles.s3.ap-south-1.amazonaws.com/"+video} type='video/mp4' />
                                        Your browser does not support the video tag.
                                    </video>
                                    }
                                </>
                            )
                        })
                    }

                    {/* <iframe id={"ytVid"}  style={{ display: 'none' }} width="560" height="315" src="https://www.youtube.com/embed/VEJWE6cpqw0?si=SPQ9nMNCw0Ikwu-e&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe> */}

                    {/* <video autoPlay>
                        <source src='vid1.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <video autoPlay>
                        <source src='vid2.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <video autoPlay>
                        <source src='vid3.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video> */}
                    <Canvas >
                        <Scene />
                    </Canvas>
                </div>
            }
        </div>
    )
}

export default Demo