import React from 'react';
import { LayoutGrid } from './ui/layout-grid';

const cards = [[
    {
        id: 1,
        className: 'md:col-span-2',
        thumbnail: 'gallery1.jpeg',
    },
    {
        id: 2,
        className: 'col-span-1',
        thumbnail: 'gallery2.jpeg',
    },
    {
        id: 3,

        className: 'col-span-1',
        thumbnail: 'gallery3.jpeg',
    },
    {
        id: 4,

        className: 'md:col-span-2',
        thumbnail: 'gallery4.jpeg',
    },
],
[
    {
        id: 1,
        className: 'md:col-span-2',
        thumbnail: 'gallery5.jpeg',
    },
    {
        id: 2,
        className: 'col-span-1',
        thumbnail: 'gallery2.jpeg',
    },
    {
        id: 3,

        className: 'col-span-1',
        thumbnail: 'gallery3.jpeg',
    },
    {
        id: 4,

        className: 'md:col-span-2',
        thumbnail: 'gallery8.jpeg',
    },
]];

export default function Gallery() {
    return (
        <div className='my-6 md:my-10 px-3'>
            <div className="font-bold text-3xl md:text-5xl mb-4 md:mb-10">Gallery</div>
            <div className="flex h-screen w-full">
                <LayoutGrid cards={cards[0]} />
                <LayoutGrid cards={cards[1]} />
            </div>
        </div>
    );
}