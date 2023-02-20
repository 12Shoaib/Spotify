import musicplayer from './musicplayer.module.css'
import SideNav from '../SideNav/SideNav'
import Footer from '../Footer/Footer'

const MusicPlayer  = () => {

    return (
        <div className={musicplayer.musicplayer__Wrapper}>

           <div className={musicplayer.main__Component}>

                <SideNav />
            <div className={musicplayer.middle__section}> 
            
            </div>
          </div>

                <Footer />

        </div>
    )
}

export default MusicPlayer