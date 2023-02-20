import sidenav from './sidenav.module.css'
import {BsSpotify} from 'react-icons/bs'
import {TiHome} from 'react-icons/ti'
import {FiSearch} from 'react-icons/fi'
import {MdLibraryMusic} from 'react-icons/md'
import {FiPlus} from 'react-icons/fi'
import {FaHeart} from 'react-icons/fa'



const SideNav = () => {

    return (
        <div className={sidenav.main__Component}>

            <div className={sidenav.sidenav__Wrapper}>
            <p className={sidenav.heading__logo}><BsSpotify className={sidenav.spotify__logo} /> Spotify</p>

            <div className={sidenav.inside__content}>

                <p className={sidenav.sub__headings}><TiHome className={sidenav.home__Icon} /> Home</p>
                <p className={sidenav.sub__headings}><FiSearch className={sidenav.home__Icon}/>Search</p>
                <p className={sidenav.sub__headings}><MdLibraryMusic className={sidenav.home__Icon} />Your Library</p>
            </div>
            <div className={sidenav.content__layer2}>

                <p className={sidenav.sub__headings}><span className={sidenav.icon_outline}><FiPlus /></span> Create Playlist</p>
                <p className={sidenav.sub__headings}><span className={sidenav.icon_outline2}><FaHeart className={sidenav.heartIcon} /></span> Liked Songs</p>
             </div>

            </div>  
            
        </div>
    )
}

export default SideNav