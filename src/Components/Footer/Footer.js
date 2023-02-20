import footer from './footer.module.css';
import {useState} from 'react'
import {FaHeart} from 'react-icons/fa'
import {FiHeart} from 'react-icons/fi'
import {TiArrowShuffle} from 'react-icons/ti'
import {AiFillStepBackward} from 'react-icons/ai'
import {AiFillStepForward} from 'react-icons/ai'
import {FaPlay} from 'react-icons/fa'
import {IoPauseSharp} from 'react-icons/io5'
import {FiRepeat} from 'react-icons/fi'
import {TbMicrophone2} from 'react-icons/tb'
import {HiOutlineSpeakerWave} from 'react-icons/hi'




const Footer = () => {
    const [like , setLike] = useState(false)
    const [playPause , setPlayPause]  = useState(false)

    const isLike = () => {
        setLike(!like)
    }
    const isPlayPause = () => {
        setPlayPause(!playPause)
    }
    return(
        <div className={footer.main__component}>

            <div className={footer.footer__Wrapper}>

            <div className={footer.left_Section}>   
            <img src='https://i.scdn.co/image/ab67616d0000b273c08202c50371e234d20caf62' alt='' className={footer.img__Style} />   
            <p className={footer.song__Wrapper} >Kesariya from Brahmastra <span className={footer.artist__Name}>Pritam, Arijit singh</span></p>
           {like ? <FaHeart className={footer.icon__Color} onClick={isLike} /> : <FiHeart  onClick={isLike} /> }
            </div>
            <div className={footer.middle__Part}>
            <TiArrowShuffle className={footer.icons} />
            <AiFillStepBackward className={footer.icons} />

           {playPause ? <p className={footer.play__Icon}>
               <IoPauseSharp onClick={isPlayPause} className={footer.icons}/>
            </p>
            :
            <p className={footer.play__Icon}>
                <FaPlay onClick={isPlayPause} className={footer.playIcon}/>
            </p>}

            <AiFillStepForward className={footer.icons} />
            <FiRepeat className={footer.icon__repeat} />
            </div>

            </div>

        </div>
    )
}
export default Footer