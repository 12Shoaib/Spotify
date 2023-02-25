import artist from './artist.module.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import SideNav from '../../Components/SideNav/SideNav'
import LibraryPoster from '../../Components/LibraryPoster/LibraryPoster'

const Artist = () => {
    return (
        <div className={artist.main__Component}>
            <Header />
            <SideNav />
            <Footer />
            <LibraryPoster />
        </div>
    )
}

export default Artist