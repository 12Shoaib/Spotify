import musicplayer from './musicplayer.module.css'
import SideNav from '../../Components/SideNav/SideNav'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HomePoster from '../../Components/HomePoster/HomePoster'
import Login from '../Login/Login'
import {loginValue} from '../../Recoil/Recoil'
import {useRecoilValue} from 'recoil'

const MusicPlayer  = () => {        
    const isLogIn = useRecoilValue(loginValue)
    return (
        <div className={musicplayer.musicplayer__Wrapper}>

           {isLogIn ? 
           <div className={musicplayer.main__Component}>
                <Header />
                <SideNav />
                <HomePoster />
                <Footer />
        </div> : <Login /> }
        </div>
    )
}

export default MusicPlayer