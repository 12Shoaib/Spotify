import searchposter from './searchposter.module.css'
import {FiSearch} from 'react-icons/fi'
import { useEffect , useState } from 'react'
import { useRecoilState } from 'recoil'
import {isMusic ,currentSong  } from '../../Recoil/Recoil'


const data = [1,2,3,4,5,6,7,8,9,0]
const SearchPoster = () => {
    const [ search , setSearch] = useState('')
    const [albums , setAlbums] = useState([])
    const [searchedAlbum , setSearchedAlbum] = useState([])
    const [loader , setLoader] = useState(false)
    const [music , setMusic] = useRecoilState(isMusic)
    const [selectedSong , setSelectedSong] = useRecoilState(currentSong)
    const [searchOff , setSearchOff] = useState(true)
    
   useEffect(() => {
    if(search == ''){
        setSearchOff(true)
    }else{
        setSearchOff(false)
    }
   })
    // useEffect(()=> {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f4a767572emsh0d0abf26f5a0955p10e59djsn7f8474f3f53d',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };
        const fetchAlbums = async() => {
            setLoader(true)
            const response = await fetch('https://shazam.p.rapidapi.com/charts/track?locale=hiphop&pageSize=20&startFrom=20', options)
            const data  = await response.json()
            setAlbums(data.tracks)
            setLoader(false)
        }
        // },[])
        localStorage.setItem("data" , JSON.stringify(albums))
        const selectedAlbumSong =   JSON.parse(localStorage.getItem('data'))
        
    function ClickedValue (index) {
        setMusic(selectedAlbumSong[index].hub.actions[1].uri)
        setSelectedSong(selectedAlbumSong[index])
        localStorage.setItem("currentSong" , JSON.stringify(selectedSong))
    }
    const searchQuery = async () => {

        setLoader(true)
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f4a767572emsh0d0abf26f5a0955p10e59djsn7f8474f3f53d',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };
        const response = await fetch(`https://shazam.p.rapidapi.com/search?term=${search}&locale=en-US&offset=0&limit=5`, options)
        const data = await response.json()
        setMusic(data.tracks.hits[0].track.hub.actions[1].uri)
        setSelectedSong(data.tracks.hits[0].track)
        setSearchedAlbum([data.tracks.hits[0].track])
        setLoader(false)
    }
    return (
        <div className={searchposter.main__component}>
            <div className={searchposter.searchposter__searchWrapper}>
             <FiSearch onClick={searchQuery} className={searchposter.search__Icon} />
              <input onChange={(e) => setSearch(e.target.value)} placeholder='What do you want to listen to?' className={searchposter.search__Bar}  />
              <p onClick={fetchAlbums}>Click HERE TO FETCH</p>
              
            </div>
            
           {loader && <div className={searchposter.loader__card__Container}>

            {data?.map(() =><div className={searchposter.loader__card__Wrapper}>
               
               <p className={searchposter.loader__searchposter__Img} ></p>
               {/* <h6>{element.share.subject}</h6> */}
               <p className={searchposter.sub__Heading}></p>
               <p className={searchposter.sub__Heading}></p>
            </div>)}

            </div>}

            {searchOff &&  <div className={searchposter.card__Container}>
                    { albums?.map((element , index) =><div className={searchposter.card__Wrapper}>
                    <img onClick={()=>ClickedValue(index)} className={searchposter.searchposter__Img} src={element.share.image} />
                    <h6>{element.share.subject}</h6>
                    </div>)}
                </div>}
                <div className={searchposter.card__Container2}>
                    { searchedAlbum.map((element , index) =><div className={searchposter.card__Wrapper}>
                    <img onClick={()=>ClickedValue(index)} className={searchposter.searchposter__Img} src={element?.share?.image} />
                    <h6>{element.share.subject}</h6>
                    </div>)}
                    </div>
        </div>
    )
}

export default SearchPoster