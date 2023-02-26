import likes from './likes.module.css'
import SideNav from '../../Components/SideNav/SideNav'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import LikesPoster from '../../Components/LikesPoster/LikesPoster'

const Likes = () => {
    return (
        <div className={likes.main__Component}>
            <Header />
            <SideNav />
            <LikesPoster />
            <Footer />


        </div>
    )
}

export default Likes