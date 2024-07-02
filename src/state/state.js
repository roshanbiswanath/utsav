import { proxy } from 'valtio';

export const state = proxy({ currentVideo: 0,started: false, vidNames: ['Snana Purnima', 'Wood Picking', 'Wood Crafting']})