import library from './library.module.css'
import SideNav from '../../Components/SideNav/SideNav'
import Footer from '../../Components/Footer/Footer'
import LibraryPoster from '../../Components/LibraryPoster/LibraryPoster'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'

const Library = () => {

    return(
        <div className={library.main__Component}>
            <Header />
            <SideNav />
            <LibraryPoster/>            
            <Footer />
        
        </div>
    )
    
}

export default Library