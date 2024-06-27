import React from 'react';
import { LayoutGrid } from './ui/layout-grid';

function SkeletonOne() {
    return (
        <div>
            <p className="font-bold text-4xl text-white">House in the woods</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life.
            </p>
        </div>
    );
}

function SkeletonTwo() {
    return (
        <div>
            <p className="font-bold text-4xl text-white">House above the clouds</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Perched high above the world, this house offers breathtaking views and a unique living experience. It's a place where the sky meets home, and tranquility is a way of life.
            </p>
        </div>
    );
}

function SkeletonThree() {
    return (
        <div>
            <p className="font-bold text-4xl text-white">Greens all over</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house surrounded by greenery and nature's beauty. It's the perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
}

function SkeletonFour() {
    return (
        <div>
            <p className="font-bold text-4xl text-white">Rivers are serene</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
}

const cards = [[
    {
        id: 1,
        content: <SkeletonOne />,
        className: 'md:col-span-2',
        thumbnail: 'gallery1.jpeg',
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: 'col-span-1',
        thumbnail: 'gallery2.jpeg',
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: 'col-span-1',
        thumbnail: 'gallery3.jpeg',
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: 'md:col-span-2',
        thumbnail: 'gallery4.jpeg',
    },
],
[
    {
        id: 1,
        content: <SkeletonOne />,
        className: 'md:col-span-2',
        thumbnail: 'gallery5.jpeg',
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: 'col-span-1',
        thumbnail: 'gallery2.jpeg',
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: 'col-span-1',
        thumbnail: 'gallery3.jpeg',
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: 'md:col-span-2',
        thumbnail: 'gallery8.jpeg',
    },
]];

export default function Gallery() {
    return (
        <div className='my-10 px-3'>
            <div className="font-bold text-3xl md:text-5xl mb-10">Gallery</div>
            <div className="flex h-screen w-full">
                <LayoutGrid cards={cards[0]} />
                <LayoutGrid cards={cards[1]} />
            </div>
        </div>
    );
}