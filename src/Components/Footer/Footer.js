import footer from './footer.module.css';
import {useRecoilState, useRecoilValue} from 'recoil'
import {FaHeart} from 'react-icons/fa'
import {FiHeart} from 'react-icons/fi'
import {TiArrowShuffle} from 'react-icons/ti'
import {AiFillStepBackward} from 'react-icons/ai'
import {AiFillStepForward} from 'react-icons/ai'
import {FaPlay} from 'react-icons/fa'
import {IoPauseSharp} from 'react-icons/io5'
import {FiRepeat} from 'react-icons/fi'
import {TbMicrophone2} from 'react-icons/tb'
import {HiOutlineSpeakerWave} from 'react-icons/hi2'
import {HiOutlineQueueList} from 'react-icons/hi2'
import {MdOutlineSpeaker} from 'react-icons/md'
import {playPauseStatus , isLikeStatus , isMusic , currentSong} from '../../Recoil/Recoil'
import {useRef , useState} from 'react'



const Footer = () => {
    const [like , setLike] = useRecoilState(isLikeStatus)
    const [playPause , setPlayPause]  = useRecoilState(playPauseStatus)
    const _currentSong = useRecoilValue(isMusic)
    const currentAlbum = useRecoilValue(currentSong)
    const audio = useRef()
    const isLike = () => {
        setLike(!like)
    }
    const isPlayPause = () => {
        setPlayPause(!playPause)
    }
    const playSong = () => {
        audio.current.play()
    }
    const pauseSong = () => {
        audio.current.pause()
    }
    return(
        <div className={footer.main__component}>

            <div className={footer.footer__Wrapper}>

            <audio src={_currentSong} ref={audio}/>

            <div className={footer.left_Section}>   
            <img src='https://i.scdn.co/image/ab67616d0000b273c08202c50371e234d20caf62' alt='' className={footer.img__Style} />   
            <p className={footer.song__Wrapper} >Kesariya from Brahmastra <span className={footer.artist__Name}>Pritam, Arijit singh</span></p>
           {like ? <FaHeart className={footer.icon__Color} onClick={isLike} /> : <FiHeart  onClick={isLike} /> }
            </div>

            <div className={footer.middle__Part}>
            <TiArrowShuffle className={footer.icons} />
            <AiFillStepBackward className={footer.icons} />

           {playPause ? <p  onClick={isPlayPause} className={footer.play__Icon}>
               <IoPauseSharp onClick={pauseSong} className={footer.icons}/>
            </p>
            :
            <p onClick={isPlayPause} className={footer.play__Icon}>
                <FaPlay onClick={playSong} className={footer.playIcon}/>
            </p>}

            <AiFillStepForward className={footer.icons} />
            <FiRepeat className={footer.icon__repeat} />
            </div>
            <div className={footer.right__Section}>
                <TbMicrophone2 className={footer.rightSection__Icons} />
                <HiOutlineQueueList className={footer.rightSection__Icons} />
                <MdOutlineSpeaker className={footer.rightSection__Icons} />
                <HiOutlineSpeakerWave className={footer.rightSection__Icons}/>
                <p className={footer.rightSection__Volume}>_____________</p>

            </div>

            </div>

        </div>
    )
}
export default Footer