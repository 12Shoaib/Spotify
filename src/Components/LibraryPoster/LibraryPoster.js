import libraryposter from './libraryposter.module.css'
import {Link} from 'react-router-dom'

const LibraryPoster = () => {
   
return(
    <div className={libraryposter.main__Component}>
        <div className={libraryposter.header__Section}>
        <Link className={libraryposter.links}  to='/playlist' >Playlists</Link>
        <Link className={libraryposter.links}  to='/podcast' >Podcast</Link>
        <Link className={libraryposter.links}  to='/artist' >Artist</Link>
        <Link className={libraryposter.links}  to='/album' >Albums</Link>
        </div>       

        <div className={libraryposter.libraryposter__Container}>

        <h1 className={libraryposter.libraryPoster__Heading}>
            Liked Songs
        </h1>
        <p className={libraryposter.libraryPoster__Sub_Heading}>
           0.Liked Songs
        </p>
        </div>

    </div>
)
}

export default LibraryPoster