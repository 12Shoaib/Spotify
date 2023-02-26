import {atom} from 'recoil';

export const playPauseStatus = atom({
    key:'status',
    default: false
})

export const isLikeStatus = atom({
    key:'like',
    default: false
})

export const isMusic = atom({
    key:'Music selected',
    default:[]
})
export const currentSong = atom({
    key:'currentSong',
    default:{}
})