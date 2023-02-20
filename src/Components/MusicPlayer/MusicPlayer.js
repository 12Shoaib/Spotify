import musicplayer from './musicplayer.module.css'
import SideNav from '../SideNav/SideNav'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Poster from '../Poster/Poster'

const MusicPlayer  = () => {

    return (
        <div className={musicplayer.musicplayer__Wrapper}>

           <div className={musicplayer.main__Component}>
                <Header />

                <SideNav />
                <Poster />

                <Footer />
        </div>
        </div>
    )
}

export default MusicPlayer