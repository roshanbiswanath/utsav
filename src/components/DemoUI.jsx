import React from 'react'
import { state } from '../state/state'
import { useSnapshot } from 'valtio'

function DemoUI() {
    const snap = useSnapshot(state)

    return (
        <div>
            <h1 className='absolute left-5 top-5 text-black font-bold z-20 bg-[rgb(204,137,13)] p-2 rounded-lg'>{snap.vidNames[snap.currentVideo]}</h1>
            {
                snap.currentVideo != 0 && <button className='absolute bottom-5 left-5 bg-[rgb(204,137,13)] p-2 rounded-full z-20 w-12 h-12' onClick={() => { state.currentVideo-- }}>
                    <img className='' src='back.svg' alt='back-button' />
                </button>
            }
            {
                snap.currentVideo != 2 && <button className='absolute bottom-5 right-5 bg-[rgb(204,137,13)] p-2 rounded-full z-20 w-12 h-12' onClick={() => { state.currentVideo++ }}>
                    <img className='' src='next.svg' alt='back-button' />
                </button>
            }
        </div>
    )
}

export default DemoUI