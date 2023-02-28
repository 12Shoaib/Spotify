import podcastposter from './podcastposter.module.css'
import {Link , useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
const data = [1,2,3,4,5,5,66,6,]

const PodcastPoster = () => {
    const [podcast , setPodcast] = useState([])
    const [loader , setLoader] = useState(false)
    const navigate = useNavigate()

useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f4a767572emsh0d0abf26f5a0955p10e59djsn7f8474f3f53d',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    async  function gettingDetails() {
        setLoader(true)
        const response = await  fetch('https://spotify81.p.rapidapi.com/search?q=podcast&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
        const data = await response.json()
        setPodcast(data.podcasts.items)
        setLoader(false)
    }
    gettingDetails()
} , [])

    const redirectSearchPage = () =>{
        navigate('/search')
    }

    return(
        <div className={podcastposter.main__Component}>
             <div className={podcastposter.header__Section}>
        <Link className={podcastposter.links}  to='/playlist' >Playlists</Link>
        <Link className={podcastposter.links}  to='/podcast' >Podcast</Link>
        <Link className={podcastposter.links}  to='/artist' >Artist</Link>
        <Link className={podcastposter.links}  to='/album' >Albums</Link>
        </div>       
        <div className={podcastposter.middle__Section}>
            <h1 className={podcastposter.heading}>
                Follow your first podcast
            </h1>

            <p className={podcastposter.sub__Heading}>
                Follow podcast you like by tapping the follow button
            </p>
            <button onClick={redirectSearchPage} className={podcastposter.button}>Find podcasts</button>
        </div>
        {loader &&<div className={podcastposter.bottom__Section1}>
           {data.map((element) =>  <div className={podcastposter.card1}>
            <span className={podcastposter.image1} ></span>
            <p className={podcastposter.sub__Heading__Loader}></p>
            </div>)}

        </div>}
        <div className={podcastposter.bottom__Section}>
           {podcast.map((element) =>  <div className={podcastposter.card}>
            <img alt='img' src={element.data.coverArt.sources[2].url} className={podcastposter.image} />
            <p className={podcastposter.sub__Heading2}>{element.data.name}</p>
            </div>)}

        </div>
        </div>
    )
}

export default PodcastPoster