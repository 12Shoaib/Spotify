import podcast from './podcast.module.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import SideNav from '../../Components/SideNav/SideNav'
import PodcastPoster from '../../Components/PodcastPoster/PodcastPoster'

const Podcast = () => {
    return(
        <div className={podcast.main__Component}>
            <Header />
            <SideNav />
            <Footer />
            <PodcastPoster />
        </div>
    )
}

export default Podcast