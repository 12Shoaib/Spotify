import likesposter from './likesposter.module.css'
import {FaHeart} from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import {FaPlay} from 'react-icons/fa'
import {IoPauseSharp} from 'react-icons/io5'
import {playPauseStatus , isLikeStatus} from '../../Recoil/Recoil'
import {FiMoreHorizontal} from 'react-icons/fi'
import MusicTrack from '../Track/MusicTrack'

const LikesPoster =  () => {
    const [playPause , setPlayPause]  = useRecoilState(playPauseStatus)

 
    const isPlayPause = () => {
        setPlayPause(!playPause)
    }
    return(
        <div className={likesposter.main__Component}>

        <div className={likesposter.upper__Section}> 
            <p className={likesposter.icon__Wrapper}><FaHeart className={likesposter.icon} /> </p>
            <div className={likesposter.upper__SectionContent}>
            <p className={likesposter.heading}>Playlist</p>
            <p className={likesposter.heading2}>Liked Songs</p>
            <p className={likesposter.heading3}>Shoaib . song</p>
            </div>
        </div>
        <div className={likesposter.middle__Section}>
            {playPause ? <p  onClick={isPlayPause} className={likesposter.play__Icon}>
               <IoPauseSharp className={likesposter.icons}/>
            </p>
            :
            <p onClick={isPlayPause} className={likesposter.play__Icon}>
                <FaPlay  className={likesposter.playIcon}/>
            </p>}
            <FiMoreHorizontal className={likesposter.icons} />
           
            </div>
            <div className={likesposter.bottom__Section}>
               <MusicTrack /> 

            </div>
        </div>
    )
}

export default LikesPoster