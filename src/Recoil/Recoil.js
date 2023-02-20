import {atom} from 'recoil';

export const playPauseStatus = atom({
    key:'status',
    default: false
})

export const isLikeStatus = atom({
    key:'like',
    default: false
})