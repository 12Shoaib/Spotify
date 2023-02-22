import searchposter from './searchposter.module.css'
import {FiSearch} from 'react-icons/fi'
import { useEffect , useState } from 'react'

const data = [1,2,3,4,5,6,7,8,9,0]
const SearchPoster = () => {
    const [albums , setAlbums] = useState([])
    const [loader , setLoader] = useState(false)
    const [music , setMusic] = useState('')

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
            const response = await fetch('https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=20', options)
            const data  = await response.json()
            setAlbums(data.tracks)
            setLoader(false)
        }
        // },[])
        localStorage.setItem("data" , JSON.stringify(albums))
        const selectedAlbumSong =   JSON.parse(localStorage.getItem('data'))
        
    function ClickedValue (index)    {
        setMusic(selectedAlbumSong[index].hub.actions[1].uri)
    }

    return (
        <div className={searchposter.main__component}>
            <div className={searchposter.searchposter__searchWrapper}>
             <FiSearch className={searchposter.search__Icon} />
              <input placeholder='What do you want to listen to?' className={searchposter.search__Bar}  />
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

                <div className={searchposter.card__Container}>
                <audio src={music}  controls/>
                    { albums?.map((element , index) =><div className={searchposter.card__Wrapper}>

                    {/* <img className={searchposter.searchposter__Img} src='https://i.scdn.co/image/ab67616d00001e02c08202c50371e234d20caf62' /> */}
                    <img onClick={()=>ClickedValue(index)} className={searchposter.searchposter__Img} src={element.share.image} />
                    <h6>{element.share.subject}</h6>
                    {/* <h2>Heloo EveryOne..!!</h2> */}
                    </div>)}
                </div>


        </div>
    )
}

export default SearchPoster