import poster from './poster.module.css'
import {BsSpotify} from 'react-icons/bs'
import {FaHeart} from 'react-icons/fa'
import {FiMoreHorizontal} from 'react-icons/fi'
import {FiHeart} from 'react-icons/fi'
import {FaPlay} from 'react-icons/fa'
import {IoPauseSharp} from 'react-icons/io5'
import { useRecoilState } from 'recoil'
import {playPauseStatus , isLikeStatus} from '../../Recoil/Recoil'



const Poster = () => {
    const [playPause , setPlayPause]  = useRecoilState(playPauseStatus)
    const [like , setLike] = useRecoilState(isLikeStatus)

    const isLike = () => {
        setLike(!like)
    }

    const isPlayPause = () => {
        setPlayPause(!playPause)
    }


    return (
        <div className={poster.main__Component}>

            <div className={poster.upper__Section}> 
                <img src='https://i.scdn.co/image/ab67706f0000000285e854e18614a1c09ad07560' className={poster.poster__Img} />
                <div className={poster.upper__SectionContent}>
                <p className={poster.heading}>Playlist</p>
                <p className={poster.heading2}>Lofi Vibe Hindi</p>
                <p className={poster.heading3}>Inhale & exhale to the beats of Lofi.</p>
                <p className={poster.heading4}><BsSpotify className={poster.spotify__Logo} />Spotify . 159,534likes. 90songs, about 4 hr 45 min</p>
                </div>

            </div>

            <div className={poster.middle__Section}>

            {playPause ? <p  onClick={isPlayPause} className={poster.play__Icon}>
               <IoPauseSharp className={poster.icons}/>
            </p>
            :
            <p onClick={isPlayPause} className={poster.play__Icon}>
                <FaPlay  className={poster.playIcon}/>
            </p>}

           {like ?
            <FaHeart className={poster.icon__Color} onClick={isLike} />
             :
              <FiHeart className={poster.icon__Color2} onClick={isLike} /> }
            <FiMoreHorizontal className={poster.icons} />
            </div>

            <div className={poster.bottom__Section}>


            </div>


        </div>
    )
}

export default Poster