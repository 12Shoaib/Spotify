import artist from './artist.module.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import SideNav from '../../Components/SideNav/SideNav'
import ArtistPoster from '../../Components/ArtistPoster/ArtistPoster'

const Artist = () => {
    return (
        <div className={artist.main__Component}>
            <Header />
            <SideNav />
            <Footer />
            <ArtistPoster />
        </div>
    )
}

export default Artist