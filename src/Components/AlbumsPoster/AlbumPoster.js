import albumposter from './albumposter.module.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const AlbumPoster = () => {
    const navigate = useNavigate()

    const redirectHomePage = () => {
        navigate('/search')
    }
    return(
        <div className={albumposter.main__Component}>
               <div className={albumposter.header__Section}>
                    <Link className={albumposter.links}  to='/playlist' >Playlists</Link>
                    <Link className={albumposter.links}  to='/podcast' >Podcast</Link>
                    <Link className={albumposter.links}  to='/artist' >Artist</Link>
                    <Link className={albumposter.links}  to='/album' >Albums</Link>
                </div>       
             <div className={albumposter.circle__One}><span className={albumposter.circle__Two}></span></div>   
            <h1 className={albumposter.heading}>Follow your first album</h1>
            <p className={albumposter.sub__Heading}>Save albums by tapping the heart icon.</p>
            <button onClick={redirectHomePage} className={albumposter.button}>Find albums</button>
        </div>

    )
}

export default AlbumPoster