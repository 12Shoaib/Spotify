import album from './album.module.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import SideNav from '../../Components/SideNav/SideNav'
import AlbumPoster from '../../Components/AlbumsPoster/AlbumPoster'

const Album = () => {
    return(
        <div className={album.main__Component}>
            <Header />
            <SideNav />
            <Footer />
            <AlbumPoster />

        </div>
    )
}

export default Album