import artistposter from './artistposter.module.css'
import { Link } from 'react-router-dom'
import {data} from '../../Assets/Assets'

const ArtistPoster = () => {
    return (
        <div className={artistposter.main__Component}>
             <div className={artistposter.header__Section}>
                    <Link className={artistposter.links}  to='/playlist' >Playlists</Link>
                    <Link className={artistposter.links}  to='/podcast' >Podcast</Link>
                    <Link className={artistposter.links}  to='/artist' >Artist</Link>
                    <Link className={artistposter.links}  to='/album' >Albums</Link>
                </div>   
                <h2 className={artistposter.heading}>Artist</h2>        
                <div className={artistposter.card__Wrapper}>
               {data.map((element) => <div className={artistposter.card__Photo}>
                    <img src={element.link} className={artistposter.image}/> 
                    <p className={artistposter.sub__Heading}>{element.name}</p>
                    <p className={artistposter.sub__Heading2}>Artist</p>
                </div>)}
                </div>

        </div>
    )
}

export default ArtistPoster