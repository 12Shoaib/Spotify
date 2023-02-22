import search from './search.module.css'
import SideNav from '../../Components/SideNav/SideNav'
import Footer from '../../Components/Footer/Footer'
import SearchPoster from '../../Components/SearchPoster/SearchPoster'
import Header from '../../Components/Header/Header'



const Search = () => {

return(
    <div className={search.main__Component}>
        <div className={search.search__Wrapper}>
            <Header />
            <SideNav />
            <SearchPoster />
            <Footer/>


        </div>

    </div>
)

}

export default Search