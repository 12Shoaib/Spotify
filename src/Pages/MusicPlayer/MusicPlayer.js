import musicplayer from './musicplayer.module.css'
import SideNav from '../../Components/SideNav/SideNav'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Poster from '../../Components/Poster/Poster'
import HomePoster from '../../Components/HomePoster/HomePoster'

const MusicPlayer  = () => {        
    return (
        <div className={musicplayer.musicplayer__Wrapper}>

           <div className={musicplayer.main__Component}>
                <Header />
                <SideNav />
                <HomePoster />
                <Footer />
        </div>
        </div>
    )
}

export default MusicPlayer